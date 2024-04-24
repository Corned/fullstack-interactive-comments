import mongoose from "mongoose"
import Vote from "./Vote.js"

const { Schema } = mongoose

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1024,
  },

  votes: [{
    type: Schema.ObjectId,
    ref: "Vote",
  }],

  owner: {
    type: Schema.ObjectId,
    ref: "User",
  },

  replies: [{
    type: Schema.ObjectId,
    ref: "Comment",
  }],

  parent: {
    type: Schema.ObjectId,
    ref: "Comment",
  }
}, {
  timestamps: true
})

// Client only needs to know how many upvotes and downvotes
// and how the currently logged in user has voted.
commentSchema.statics.formatForUser = (comment, forUserId) => {
  return {
    ...comment._doc, // ???
    userVote: forUserId 
      ? comment.votes.find((vote) => vote.owner.toString() === forUserId)
      : null,
    upvotes: comment.votes.filter((vote) => vote.value > 0).length,
    downvotes: comment.votes.filter((vote) => vote.value < 0).length,
    votes: [ "Removed for privacy :)" ],
  }
}

// When deleting a comment, check if the
// comment has a parent. If so, delete
// the comment's id from parent's replies.
// If comment has no parent, delete all replies

commentSchema.post("deleteOne", { document: true, query: false }, async function() {
  const { _id: id, parent: parentId } = this

  // If the deleted comment is a root Comment
  // (without a parent)
  if (!parentId) {
    // Delete all votes related to the deleted Comment
    await Vote.deleteMany({ comment: id })

    // Comment has no parent, find all replies
    const commentsToBeDeleted = await Comment.find({ parent: id })

    // Delete all replies related to the root comment
    const promises = []
    for (const comment of commentsToBeDeleted) {
      promises.push( await comment.deleteOne() )
    }

    await Promise.all(promises)

    return
  }

  // If comment has a parent (comment is a reply)

  // Delete all votes associated with the comment
  // that was deleted with deleteOne
  await Vote.deleteMany({ comment: id })

  // Remove reference to this comment in parent
  const parent = await Comment.findById(parentId)

  // If user deletes the root/parent comment first
  // its replies are deleted afterwards so parent
  // already doesn't exist.
  if (parent) {
    parent.replies = parent.replies.filter((replyId) => {
      return replyId.toString() !== id.toString()
    })

    await parent.save()
  }
})

const Comment = mongoose.model("Comment", commentSchema)

export default Comment