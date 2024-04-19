import express from "express"
const router = express.Router()

router.get("/", async (req, res) => {
  res.send("All votes :o")
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  res.send(`Requesting vote with id of ${id}`)
})

router.post("/", async (req, res) => {
  res.send("Hello world!")
})

router.put("/:id", async (req, res) => {
  res.send("Hello world!")
})

router.delete("/:id", async (req, res) => {
  res.send("Hello world!")
})

export default router