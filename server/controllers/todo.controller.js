const db = require("../models");
const Todo = db.todos;

exports.findAll = async (req, res) => {
  req
    ? await Todo.findAll({
      // order: [["id", "DESC"]],
      attributes: ["id", "description", "status"],
      // limit: 10,
    }).then((data) => res.json(data))
    : res.status;
};

exports.create = async (req, res) => {
  req
    ? await Todo.create({
      description: req.body.description,
      status: req.body.status,
    })
      .then((data) => res.json(data))
      .catch((err) => console.log(err))
    : res.status;
};

exports.findOne = async (req, res) => {
  req.params.id
    ? await Todo.findOne({ where: { id: req.params.id } }).then((data) =>
      res.json(data)
    )
    : res.status;
};

exports.upsert = async (req, res) => {
  req.params.id
    ? await Todo.upsert({
      id: req.params.id,
      description: req.body.description,
      status: req.body.status,
    })
      .then(([data]) => res.json(data))
      .catch((err) => console.log(err))
    : res.status;
};

exports.destroy = async (req, res) => {
  req.params.id
    ? await Todo.destroy({
      where: { id: req.params.id },
    })
      .then((data) => res.json(data))
      .catch((err) => console.log(err))
    : res.status;
};

exports.deleteAll = async (req, res) => {
  req ?
    await Todo.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Todos were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Todos."
        });
      })
    :
    null
};
