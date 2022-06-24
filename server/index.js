const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000
const pool = require("./config/config.json");
const db = require('./models')
const Todo = db.todos
const Op = db.Sequelize.Op;

// MiddleWare Cors
var corsOptions = {
    origin: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    optionsSuccessStatus: 200,
    preflightContinue: true,
    allowedHeaders: ['Content-Type', 'Authorization'],


}
app.options('*', cors(corsOptions));
app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.urlencoded({ extended: true }));

// Sequelize

db.sequelize.sync()
    .then(() => console.log("Database Sync Successfull"))
    .catch((err) => console.log(err.message))


// Routes

// Add a todo
app.post("/todos", cors(corsOptions), async (req, res) => {
    if (!req.body.description) {
        res.status(400).send({
            message: "Description is empty"
        })
    }
    const newTodo = {
        description: req.body.description,
        status: false
    }
    await Todo.create(newTodo)
        .then((data) => res.send(data))
        .catch((err) => console.log(err))

})

// Get all todos
app.get("/todos", async (req, res) => {
    if (!req) {
        res.status(400).send({
            message: "Fetch failed"
        })
    }
    await Todo.findAll()
        .then((data) => res.json(data))
})
// Get a todo item
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const todoItem = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todoItem.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// Edit or update todo
app.patch("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { description, status } = req.body
        if ((res.description != description) || (res.status !== status)) {
            const updateTodo = await pool.query("UPDATE todo SET description = $1 , status = $2 WHERE todo_id = $3", [description, status, id]);
            res.json(updateTodo.rows)
        }
    } catch (err) {
        console.error(err.message)
    }
})

// Del todo
app.delete("/todos/:id", async (req, res) => {
    const id = req.params.id
    Todo.destroy({
        where: { id: id }
    }).then((num) => {
        if (num) {
            res.send({
                message: `Deleted todo item with ID : ${id}`
            })
        } else {
            res.send({
                message: `Failed to delete todo item with ID : ${id}`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Could not delete Tutorial with id : ${id}`
        })
    });
})

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
})