import bcrypt from "bcryptjs"
import express from "express"
const router = express.Router()

import User from "../models/User.js"

router.get("/", async (req, res) => {
  res.send("All users :o")
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  res.send(`Requesting user with id of ${id}`)
})

router.post("/", async (req, res) => {
  // Create new user
  const { username, password, passwordConfirm } = req.body

  if (password !== passwordConfirm) {
    return res.status(400).json({ error: "Passwords don't match." })
  }

  const existingUser = await User.findOne({ username })
  if (existingUser) {
    return res.status(400).json({ error: "Username already exists." })
  }

  console.log("Creating new user %s", username);
  const passwordHash = await bcrypt.hash(password, 10)

  try {
    const newUser = new User({ username, passwordHash })
    const savedUser = await newUser.save()
    
    res.status(201).json({ message: "success!" })
  } catch (error) {

  }

})

router.put("/:id", async (req, res) => {
  res.send("Hello world!")
})

router.delete("/:id", async (req, res) => {
  res.send("Hello world!")
})

export default router