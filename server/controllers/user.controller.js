const db = require("../models");
const User = db.user;

exports.allAccess = async (req, res) => {
  req
    ? await User.findAll({
        attributes: ["id", "username", "password"],
      }).then((data) => res.json(data))
    : res.status(404).send({ message: "404 Error" });
};
