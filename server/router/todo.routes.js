const todos = require("../controllers/todo.controller.js");

var router = require("express").Router();

module.exports = (app) => {
  // Create a new todo
  router.post("/", todos.create);

  // Retrieve all todos
  router.get("/", todos.findAll);

  // Retrieve a single todo with id
  router.get("/:id", todos.findOne);

  // Update a todo with id
  router.patch("/:id", todos.upsert);

  // Delete a todo with id
  router.delete("/:id", todos.destroy);

  // Delete all todos
  router.delete("/", todos.deleteAll);

  app.use("/todos", router);
};
