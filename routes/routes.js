const router = require("express").Router();
const TaskController = require("../Controller/TaskController");
router.get("/home", TaskController.getAllTask);
router.post("/create", TaskController.createTask);
router.get("/getById/:id/:method", TaskController.GetById);
router.post("/updateOne/:id", TaskController.updateOneTask);
router.get("/deleteOne/:id", TaskController.deleteTask);
router.get("/Checkout/:id", TaskController.deleteTask);

module.exports = router;
