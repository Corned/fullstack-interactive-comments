import mongoose from "mongoose"

import express from "express"
import morgan from "morgan"

import commentRouter from "./routers/Comment.js"
import userRouter from "./routers/User.js"
import voteRouter from "./routers/Vote.js"

import dotenv from "dotenv"
dotenv.config()


// mongodb stuff
const main = async () => {
  await mongoose.connect(process.env.MONGODB_URL)

  console.log("connected to mongodb..")
}

main().catch(err => console.log(err))


const app = express()

app.use(morgan("tiny"))
app.use("/comment", commentRouter)

app.get("/", (req, res) => {
  res.send("Hello world!")
})

app.listen(process.env.PORT, () => {
  console.log(`Application is now running on port ${process.env.PORT}`)
})