const Task = require("../Models/Task");

const getAllTask = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", { tasksList, task: null });
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};
const GetById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    const tasksList = await Task.find();
    res.render("index", { task, tasksList });
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await task.updateOne({ _id: req.params.id }, task);
    res.redirect("/");
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

module.exports = {
  getAllTask,
  createTask,
  GetById,
  updateOneTask,
};
