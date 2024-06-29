const router = require("express").Router();
const TaskController = require("../Controller/TaskController");
router.get("/home", TaskController.getAllTask);
router.post("/create", TaskController.createTask);

module.exports = router;
