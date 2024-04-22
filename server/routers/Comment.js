import express from "express"
import Comment from "../models/Comment.js"
import User from "../models/User.js"

const router = express.Router()


router.get("/", async (req, res) => {
  const comments = await Comment
    .find({})
    .populate("owner", [ "username" ])

  res.status(200).json(comments)
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  const comment = await Comment
    .findById(id)
    .populate("owner", [ "username" ])


  res.status(200).json(comment)
})

router.post("/", async (req, res) => {
  const { content, parentId } = req.body

  console.log(req.body);

  if (!req.userId) {
    return res.status(401).json({ error: "User is not authenticated" })
  }

  console.log(content);

  const user = await User.findById(req.userId)
  const newComment = new Comment({ content, owner: user })

  await newComment.save()
  user.comments.push(newComment._id)
  await user.save()

  if (parentId) {
    parentComment.replies.push(parentId)
    await parentComment.save()
  }

  res.status(201).json(newComment.toObject())
})

router.put("/:id", async (req, res) => {
  res.send("Hello world!")
})

router.delete("/:id", async (req, res) => {
  res.send("Hello world!")
})

export default router