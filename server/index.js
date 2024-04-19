import mongoose from "mongoose"

import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import commentRouter from "./routers/Comment.js"
import userRouter from "./routers/User.js"
import voteRouter from "./routers/Vote.js"

dotenv.config()


// mongodb stuff
const main = async () => {
  await mongoose.connect(process.env.MONGODB_URL)

  console.log("connected to mongodb..")
}

main().catch(err => console.log(err))

const app = express()

app.use(cookieParser())
app.use(morgan("tiny"))
app.use("/user", userRouter)
app.use("/comment", commentRouter)
app.use("/vote", voteRouter)

app.get("/", (req, res) => {
  res.send("Hello world!")
})

app.listen(process.env.PORT, () => {
  console.log(`Application is now running on port ${process.env.PORT}`)
})