var express = require("express");
var router = express.Router();

const { courseController, courseteacherController } = require("../controller");

router.post("/", courseteacherController.createcourseteacher);

module.exports = router;
