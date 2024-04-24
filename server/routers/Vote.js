import express from "express"
import Comment from "../models/Comment.js"
import Vote from "../models/Vote.js"

const router = express.Router()

router.get("/", async (req, res) => {
  res.send("All votes :o")
})

router.post("/", async (req, res) => {
  const { commentId, value } = req.body

  if (!req.userId) {
    return res.status(401).json({
      error: "You need to be logged in to vote."
    })
  }

  // Check if comment exists
  const commentToVote = await Comment
    .findById(commentId)
    .populate("owner", [ "username" ])
    .populate("votes")

  if (!commentToVote) {
    return res.status(400).json( {
      error: "Comment doesn't exist"
    })
  }

  // Check if vote already exists
  const existingVote = await Vote.findOne({
    comment: commentId,
    owner: req.userId,
  })

  if (existingVote) {
    await existingVote.deleteOne()
    commentToVote.votes = commentToVote.votes.filter((vote) => {
      return vote.id !== existingVote.id
    })
  }

  const newVote = new Vote({
    owner: req.userId,
    comment: commentId,
    value: Math.min(1, Math.max(-1, Math.round(value))),
  })

  const savedNewVote = await newVote.save()
  commentToVote.votes.push(savedNewVote)
  // put this in a middleware
  const savedComment = await commentToVote.save() 
  const formattedComment = Comment.formatForUser(savedComment, req.userId)


  console.log("VOTE", formattedComment);
  console.log(existingVote);

  res.status(201).json({ message: "Voted!", newComment: formattedComment })
})

router.post("/unvote", async (req, res) => {
  const { commentId } = req.body

  if (!req.userId) {
    return res.status(401).json({
      error: "You need to be logged in to vote."
    })
  }

  // Check if comment exists
  const commentToUnvote = await Comment
    .findById(commentId)
    .populate("owner", [ "username" ])
    .populate("votes")

  if (!commentToUnvote) {
    return res.status(400).json( {
      error: "Comment doesn't exist"
    })
  }

  // Check if vote already exists
  const existingVote = await Vote.findOne({
    comment: commentId,
    owner: req.userId,
  })

  if (existingVote) {
    await existingVote.deleteOne()
    // put this in a middleware
    commentToUnvote.votes = commentToUnvote.votes.filter((vote) => {
      return vote.id !== existingVote.id
    })
  }

  const savedComment = await commentToUnvote.save()
  const formattedComment = Comment.formatForUser(savedComment, req.userId)


  console.log("UNVOTE", formattedComment);
  console.log(existingVote);

  res.status(201).json({ message: "Unvoted!", newComment: formattedComment })
})


router.delete("/:id", async (req, res) => {
  res.send("Hello world!")
})

export default router