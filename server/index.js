const express = require('express')
const app = express();
const cors = require('cors');
const port = 5000
const pool = require("./db");
const { json } = require('express');

// MiddleWare Cors
app.use(cors());
app.use(express.json())

// Routes

// Add a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *",
            [description]
        );
        res.status(200).json(newTodo.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// Get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.status(200).json(allTodos.rows)
    } catch (err) {
        console.error(err.message)
    }
})
// Get a todo item
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const todoItem = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.status(200).json(todoItem.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// Edit or update todo
app.patch("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.status(200).json(updateTodo.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// Del todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const delTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.status(200).json(delTodo.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(port, () => {
    console.log("server started on port 5000")
})