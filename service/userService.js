// Import the 'models' object from the model definitions.
const { models } = require("../models/definitions");
const bcrypt = require("bcrypt");

module.exports = {
  // Function to get user data. Currently, it returns the input data as-is.
  getUser: async () => {
    const result = await models.user.findAll();
    return result;
  },

  // Asynchronous function to create a user using the Sequelize model.
  createUser: async (data) => {
    const salltRound = 10;
    data.password = bcrypt.hashSync(data.password, salltRound);
    // Use the 'models.user.create' method to create a user in the database with the provided 'data'.
    const result = await models.user.create(data);

    // Log the 'result', which represents the newly created user, to the console.
    console.log(result);

    // Return the 'result', which contains the created user's data.
    return result;
  },
};
