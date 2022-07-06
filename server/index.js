const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const pool = require("./config/config.json");
const db = require("./models");
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
  .then((res) => console.log(res))
  .then(() => console.log("Database Sync Successfull"))
  .catch((err) => console.log(err.message));

// Routes
require("./router/todo.routes.js")(app);

app.listen(port, () => {
  console.log(`Server started on port : ${port}`);
});
