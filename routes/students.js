var express = require("express");
var router = express.Router();

const { studentController } = require("../controller");

router.get("/", studentController.getStudent);
router.post("/", studentController.createStudent);

module.exports = router;
