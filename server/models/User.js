import mongoose from "mongoose"
const { Schema } = mongoose

const userSchema = new Schema({
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
}, {
  timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User