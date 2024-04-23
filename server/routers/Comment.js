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

router.get("/:id/replies", async (req, res) => {
  const { id: parentId } = req.params

  console.log(parentId);

  if (!parentId) {
    return res.status(400).json({ error: "No id" })
  }

  const comments = await Comment
    .find({ parent: parentId })
    .populate("owner", [ "username" ])

  res.status(200).json(comments || [])
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

  if (!req.userId) {
    return res.status(401).json({ error: "User is not authenticated" })
  }

  const user = await User.findById(req.userId)
  const newComment = new Comment({ content, owner: user, parent: parentId })

  await newComment.save()
  user.comments.push(newComment._id)
  await user.save()

  if (parentId) {
    const parentComment = await Comment.findById(parentId)
    parentComment.replies.push(newComment._id)
    await parentComment.save()
  }

  res.status(201).json(newComment.toObject())
})

router.put("/:id", async (req, res) => {
  const { id, content } = req.body

  const comment = await Comment.findById(id)

  if (comment.id !== req.userId) {
    return res.status(401).json({
      error: "You're not the owner of the comment"
    })
  }

  comment.content = content
  await comment.save()

  res.status(200).json(comment.toObject())
})

router.delete("/:id", async (req, res) => {
  res.send("Hello world!")
})

export default router