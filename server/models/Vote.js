import mongoose from "mongoose"
const { Schema } = mongoose

const voteSchema = new Schema({
  owner: {
    type: Schema.ObjectId,
    ref: "User",
    required: true,
  },

  value: {
    type: Number,
    required: true,
  },

  comment: {
    type: Schema.ObjectId,
    ref: "Comment",
    required: true,
  },
}, {
  timestamps: true
})

/* voteSchema.post("save", { document: true, query: false }, async function() {

}) */

const Vote = mongoose.model("Vote", voteSchema)

export default Vote