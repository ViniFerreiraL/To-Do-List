const Task = require("../Models/Task");

const getAllTask = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", { tasks: tasksList });
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

const createTask = async (req, res) => {
  const taskDescription = req.body.task;
  let checkout = req.body.Checkout; // Verifica se o campo Checkout está presente

  // Se o campo Checkout não estiver presente ou estiver vazio, define como false
  if (!checkout) {
    checkout = false;
  } else {
    // Converte para booleano se estiver presente
    checkout = checkout === "true";
  }

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
};
