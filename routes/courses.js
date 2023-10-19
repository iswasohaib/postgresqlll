var express = require("express");
var router = express.Router();

const { courseController } = require("../controller");

router.get("/", courseController.getCourse);
router.post("/", courseController.createCourse);

module.exports = router;
