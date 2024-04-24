import mongoose from "mongoose"
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
// + If comment has no parent, delete all replies
// TODO: Delete comment's votes
commentSchema.post("deleteOne", { document: true, query: false }, async function() {
  const { _id: id, parent: parentId } = this
  if (!parentId) {
    // Comment has no parent, delete all replies
    await Comment.deleteMany({ parent: id })

    return
  }

  const parent = await Comment.findById(parentId)
  parent.replies = parent.replies.filter((replyId) => {
    return replyId.toString() !== id.toString()
  })

  await parent.save()
})

const Comment = mongoose.model("Comment", commentSchema)

export default Comment