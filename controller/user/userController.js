// Import the 'userService' module to access user-related functionality.
const userService = require("../../service/userService");

module.exports = {
  // getUser: This function is for handling GET requests. It calls the getUser function from the userService module, passing the request body as an argument, and then sends the response with the data obtained from the userService.
  getUser: async (req, res) => {
    const data = await userService.getUser();
    res.send(data);
  },

  // This asynchronous function is for handling POST requests to create a user. It calls the createUser function from the userService module, passing the request body as an argument. After obtaining the data (which could be the user data created in the service), it sends the response with that data.
  createUser: async (req, res) => {
    const data = await userService.createUser(req.body);
    res.send(data);
  },
  createUserHelper: async (data) => {
    const userData = await userService.createUser(data);
    return userData;
  },
};
