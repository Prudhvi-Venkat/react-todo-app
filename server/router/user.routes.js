var router = require("express").Router();
const user = require("../controllers/user.controller.js");

module.exports = (app) => {
  router.get("/", user.allAccess);
  app.use("/user", router);
};
