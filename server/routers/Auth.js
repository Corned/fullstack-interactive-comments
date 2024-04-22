import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import User from "../models/User.js"


const router = express.Router()

router.post("/", async (req, res) => {
  const { auth } = req.cookies

  if (!auth) {
    return res.status(401).json({ error: "User is not authenticated" })
  }

  const [ _, token ] = auth.split(" ")
  const decoded = jwt.verify(token, process.env.SECRET_KEY)

  res.status(200).json({ user: decoded })
})

router.post("/login", async (req, res) => {
  const { username, password } = req.body

  console.log("login attempt", { username, password });

  try {
    const user = await User
      .findOne({ username })
      .select("username passwordHash")

    if (!user) {
      return res.status(401).json({
        error: "Invalid username or password"
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash)
    if (!isPasswordCorrect) {
      return res.status(401).json({
        error: "Invalid username or password"
      })
    }

    // User successfully logged in
    const token = jwt.sign({
      username: user.username,
      id: user._id
    }, process.env.SECRET_KEY)

    res.cookie("auth", `Bearer ${token}`, {
      httpOnly: true,
      // secure: true,
      maxAge: 2**32,
    })

    const userObject = user.toObject()
    delete userObject.passwordHash
    
    return res.status(200).json({ user: userObject })
  } catch(exception) {
    console.log(exception)
    return res.status(500).json({ error: "Something went wrong..." })
  }
})

export default router