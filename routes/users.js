// Import the express module.
var express = require("express");

// Create a router instance.
var router = express.Router();

// Import the controllers.
const { userController } = require("../controller");

/* GET users listing. */
// Define routes for handling HTTP GET and POST requests.
router.get("/", userController.getUser);
router.post("/", userController.createUser);

// Export the router for use in the application.
module.exports = router;
