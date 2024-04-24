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

// When deleting a comment, check if the
// comment has a parent. If so, delete
// the comment's id from parent's replies.
commentSchema.post("deleteOne", { document: true, query: false }, async function() {
  const { _id: id, parent: parentId } = this
  if (!parentId) {
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