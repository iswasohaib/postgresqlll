var express = require("express");
var router = express.Router();

const { teacherController } = require("../controller");

router.get("/:id", teacherController.getTeacherbyid);
router.get("/", teacherController.getTeacher);

router.post("/", teacherController.createTeacher);

module.exports = router;
