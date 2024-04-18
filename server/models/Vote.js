import mongoose from "mongoose"
const { Schema } = mongoose

const voteSchema = new Schema({
  owner: {
    type: Schema.ObjectId,
    ref: "User",
    required: true,
  },

  comment: {
    type: Schema.ObjectId,
    ref: "Comment",
    required: true,
  },

  isPositive: {
    type: Boolean,
    default: true,
    required: true,
  }
})

const Vote = mongoose.model("Vote", voteSchema)

export default Vote