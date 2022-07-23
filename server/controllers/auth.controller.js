const config = require("../config/auth.config.js")
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  req
    ? await User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password),
    })
      .then((data) => res.json(data))
      .catch((err) => console.log(err))
    : res.statusCode;
};

exports.signin = async (req, res) => {
  req.body.username
    ? await User.findOne({
      where: {
        username: req.body.username,
      },
      attributes: ["id", "username", "password"],
    }).then((user) => {
      var passwordValidator = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      var token = jwt.sign({ id: user.id }, config.secretKey, {
        expiresIn: 86400, // 24 hours
      });
      !user
        ? res.status(404).send({ message: "User not found" })
        : passwordValidator
          ? res
            .status(401)
            .send({ accessToken: null, message: "Invalid password" })
          : res.status(200).send({
            id: user.id,
            username: user.username,
            accessToken: token,
          });
    })
      .then((data) => res.json(data))
      .catch((err) => console.log(err))
    : res.statusCode;
};
