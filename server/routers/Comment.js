import express from "express"
const router = express.Router()

router.get("/", async (req, res) => {
  res.send("All comments :o")
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  res.send(`Requesting comment with id of ${id}`)
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