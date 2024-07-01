const Task = require("../Models/Task");

const getAllTask = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", { tasksList, task: null, taskDelete: null });
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;

    await Task.updateOne({ _id: req.params.id }, task);
    res.redirect("/home");
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};
const createTask = async (req, res) => {
  const taskDescription = req.body.task;
  const checkout = req.body.Checkout === "true";

  if (!taskDescription) {
    return res.redirect("/home");
  }

  try {
    await Task.create({ task: taskDescription, Checkout: checkout });
    return res.redirect("/home");
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};
const GetById = async (req, res) => {
  try {
    const tasksList = await Task.find();

    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", { task, taskDelete: null, tasksList });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", { task: null, taskDelete, tasksList });
    }
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.redirect("/home");
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

module.exports = {
  getAllTask,
  createTask,
  GetById,
  updateOneTask,
  deleteTask,
};
