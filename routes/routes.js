const router = require("express").Router();
const TaskController = require("../Controller/TaskController");
router.get("/home", TaskController.getAllTask);
router.post("/create", TaskController.createTask);
router.get("/getById/:id", TaskController.GetById);
router.post("updateOne/id:", TaskController.updateOneTask);
module.exports = router;
