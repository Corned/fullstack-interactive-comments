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
})

const Comment = mongoose.model("Comment", commentSchema)

export default Comment