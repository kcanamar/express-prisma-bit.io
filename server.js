require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

// Prisma Setup
////////////////////////////

// Import the PrismaClient constructor from the @prisma/client node module
const { PrismaClient } = require('@prisma/client')
// Instantiate PrismaClient
const prisma = new PrismaClient()

const app = express()
const { PORT = 3000 } = process.env

app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.get("/", async (req, res) => {
    // find all todos
    const todos = await prisma.Todo.findMany()

    res.json(todos) 
})
app.get("/:id", async (req, res) => {
    // get the id off request
    // ! Note the data type of the identifier must match the schema
    const id = parseInt(req.params.id)
    // find on todo
    const todo = await prisma.Todo.findUnique({
        // SQL WHERE QUERY
        where: { id }
    })

    res.json(todo)
})

app.post("/", async (req, res) => {
    // get parts from req.body
    const { subject, details } = req.body

    // create a todo
    const todo = await prisma.Todo.create({
        // Data in schema to create
        data: {
            subject,
            details
        }
    })

    res.json(todo)
})

app.put("/:id", async (req, res) => {
    // get the id off request
    // ! Note the data type of the identifier must match the schema
    const id = parseInt(req.params.id)

    // get data from request body
    const { subject, details } = req.body

    // update 
    const todo = await prisma.Todo.update({
        // SQL WHERE QUERY
        where: { id },
        // Update with data
        data: {
            subject,
            details
        }

    })
    res.json(todo)
})

app.delete("/:id", async (req, res) => {
    // get the id off request
    // ! Note the data type of the identifier must match the schema
    const id = parseInt(req.params.id)

    // delete 
    const todo = await prisma.Todo.delete({
        where: { id }
    })


    res.json(todo)
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))