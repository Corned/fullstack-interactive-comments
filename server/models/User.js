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
})

const User = mongoose.model("User", UserSchema)

export default User