const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
const pool = require("./config/db.config");

// MiddleWare Cors
app.use(cors());
app.use(express.json())

// Routes

// Add a todo
app.post("/todos", async (req, res) => {
    try {
        const { description, added_date } = req.body
        const newTodo = await pool.query("INSERT INTO todo (description, added_date) VALUES ($1, $2) RETURNING *",
            [description, added_date]
        );
        res.json(newTodo.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// Get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo ORDER BY todo_id ASC")
        res.json(allTodos.rows.sort(allTodos.todo_id))
    } catch (err) {
        console.error(err.message)
    }
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
    try {
        const { id } = req.params
        const delTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json(delTodo.rows)
        console.log(`Deleted todo item with ID : ${id}`)
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
})