import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import User from "../models/User.js"


const router = express.Router()

router.post("/", async (req, res) => {
  const { username, password } = req.body

  console.log("login attempt", { username, password });

  try {
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(401).json({
        error: "Invalid username or password"
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
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

    res.cookie("access_token", `Bearer ${token}`)

    return response.status(200).json({ user })

  } catch(exception) {
    console.log(exception)
    return response.status(500).json({ error: "Something went wrong..." })
  }
})

export default router