const auth = require("../controllers/auth.controller.js");

var router = require("express").Router();

module.exports = (app) => {
  router.post("/", auth.signup);
  router.post("/signin", auth.signin);

  app.use("/auth", router);
};
