import mongoose from "mongoose"
const { Schema } = mongoose

const voteSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 30,
    minlength: 3,
  },

  passwordHash: {
    type: String,
    required: true,
  },

  comments: [{
    type: Schema.ObjectId,
    ref: "Comment",
  }],

  votes: [{
    type: Schema.ObjectId,
    ref: "Vote",
  }],
})

const Vote = mongoose.model("Vote", voteSchema)

export default Vote