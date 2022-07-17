module.exports = (app) => {
  var router = require("express").Router();

  // Check the connection
  router.get("/", (req, res) => {
    req
      ? res
        .status(200)
        .json(
          "message: Server started successfully. " +
          "Status Code : " +
          res.statusCode
        )
      : res
        .status(404)
        .json(
          "message: Starting server failed " +
          " && Status Code :" +
          res.statusCode
        );
  });

  app.use("/", router);
};
