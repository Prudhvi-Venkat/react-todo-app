const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const pool = require("./config/config.json");
const db = require("./models");
const Todo = db.todos;
const bodyParser = require("body-parser");

// MiddleWare Cors
var corsOptions = {
  origin: true,
  methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
  optionsSuccessStatus: 200,
  preflightContinue: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use("*", cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sequelize

db.sequelize
  .sync({ alter: true })
  .then(() => console.log("Database Sync Successfull"))
  .catch((err) => console.log(err.message));

// Routes

// Get all todos
app.get("/todos", async (req, res) => {
  if (!req) {
    res.status(400).send({
      message: "Fetch failed",
    });
  }
  await Todo.findAll({
    order: [["id", "DESC"]],
    attributes: ["id", "description", "status"],
    // limit: 10,
  }).then((data) => res.json(data));
});

// Add a todo
app.post("/todos", async (req, res) => {
  const newTodo = {
    description: req.body.description,
    status: req.body.status,
  };
  req
    ? await Todo.create(newTodo)
        .then((data) => res.json(data))
        .catch((err) => console.log(err))
    : res.status;
});

// Get a todo item
app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  id
    ? await Todo.findOne({ where: { id: id } }).then((data) => res.json(data))
    : res.status;
});

// Edit or update todo
app.patch("/todos/:id", async (req, res) => {
  req
    ? await Todo.upsert({
        id: req.params.id,
        description: req.body.description,
        status: req.body.status,
      })
        .then(([data]) => res.json(data))
        .catch((err) => console.log(err))
    : res.status;
});

// Del todo
app.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;
  id
    ? await Todo.destroy({
        where: { id: id },
      })
        .then((data) => res.json(data))
        .catch((err) => console.log(err))
    : res.status;
});

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});
