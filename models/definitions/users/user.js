// Import the 'DataTypes' object from the 'sequelize' library.
const { DataTypes } = require("sequelize");

// Import the database connection instance from a relative path.
let sequelize = require("../../../common/dbConnection");

// Define a Sequelize model named 'user' with associated attributes.
const user = sequelize.define(
  "user",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    phoneNumber: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    // Define additional options for the 'user' model.
    timestamps: true, // Automatically add 'createdAt' and 'updatedAt' fields.
    paranoid: true, // Enable soft deletion, marking rows as deleted.
    sequelize, // Associate the model with the 'sequelize' instance.
    modelName: "user", // Set the name of the model explicitly.
  }
);

// Export the 'user' model so it can be used in other parts of the application.
module.exports = user;

//In summary, this code defines a Sequelize model named "user" with specific attributes and options, and then exports this model for use in other parts of the application. The model represents a database table for storing user data with fields like 'id,' 'firstName,' 'lastName,' 'email,' and 'phoneNumber,' each with its data type and constraints. The model also includes options for automatically managing timestamps and enabling soft deletions, and it specifies a model name of "user."
