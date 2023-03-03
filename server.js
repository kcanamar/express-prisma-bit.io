require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()
const { PORT = 3000 } = process.env

app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) => {
    res.json({message: "Hello"})
})
app.get("/:id", (req, res) => {
    res.json({ id: req.params.id })
})

app.post("/", (req, res) => {
    res.json({body: req.body})
})

app.put("/:id", (req, res) => {
    res.json({ body: req.body, id: req.params.id })
})

app.delete("/:id", (req, res) => {
    res.json({ id: req.params.id})
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))