// env file
require("dotenv").config({ path: "../.env" });

const express = require("express");
const cors = require("cors");
const app = express();
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
app.use('*', cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sequelize
db.sequelize
  .sync({ alter: true })
  // .then((res) => console.log(res))
  .then(() => console.log("Database Sync Successfull"))
  .catch((err) => console.log(err.message));

// Routes
require("./router/index.js")(app);
require("./router/todo.routes.js")(app);
require("./router/auth.routes.js")(app);
require("./router/user.routes.js")(app);

app.listen(process.env.NODE_ENV_PORT, () => {
  console.log(
    `Server started on port NODE_ENV_PORT : ${process.env.NODE_ENV_PORT}`
  );
});
