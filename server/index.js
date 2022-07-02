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
app.options("*", cors(corsOptions));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));

// Sequelize

db.sequelize
  .sync()
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
app.post("/todos", cors(corsOptions), async (req, res) => {
  if (!req.body.description) {
    res.status(400).send({
      message: "Description is empty",
    });
  } else {
    const newTodo = {
      description: req.body.description,
      status: req.body.status,
    };
    await Todo.create(newTodo)
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  }
});

// Get a todo item
app.get("/todos/:id", cors(corsOptions), async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({
      message: `Fetching details failed with ID : ${id}`,
    });
  } else {
    await Todo.findOne({ where: { id: id } }).then((data) => res.json(data));
  }
});

// Edit or update todo
app.patch("/todos/:id", cors(corsOptions), async (req, res) => {
  const id = req.params.id;
  const updatedTodo = {
    description: req.body.description,
    status: req.body.status,
  };
  if (!id) {
    res.status(400).send({
      message: `Editing details failed with ID : ${id}`,
    });
  } else {
    await Todo.update(updatedTodo, { where: { id: id } })
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  }
});

// Del todo
app.delete("/todos/:id", cors(corsOptions), async (req, res) => {
  const id = req.params.id;
  await Todo.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num) {
        res.send({
          message: `Deleted todo item with ID : ${id}`,
        });
      } else {
        res.send({
          message: `Failed to delete todo item with ID : ${id}`,
        });
      }
    })
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Tutorial with id : ${id}`,
      });
    });
});

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});
