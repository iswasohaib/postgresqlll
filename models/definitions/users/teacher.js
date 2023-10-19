// Import the 'DataTypes' object from the 'sequelize' library.
const { DataTypes } = require("sequelize");

// Import the database connection instance from a relative path.
let sequelize = require("../../../common/dbConnection");

// Define a Sequelize model named 'student' with associated attributes.
const teacher = sequelize.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    qualification: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    yearsOfExperience: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    // Define additional options for the 'student' model.
    timestamps: true, // Automatically add 'createdAt' and 'updatedAt' fields.
    paranoid: true, // Enable soft deletion, marking rows as deleted.
    sequelize, // Associate the model with the 'sequelize' instance.
    modelName: "teacher", // Set the name of the model explicitly.
  }
);

// Export the 'student' model so it can be used in other parts of the application.
module.exports = teacher;

//In summary, this code defines a Sequelize model named "student" with specific attributes and options, and then exports this model for use in other parts of the application. The model represents a database table for storing student data with fields like 'id,' 'rollnumber,' 'department,' and 'semester,' each with its data type and constraints. Additionally, the model includes options for automatically managing timestamps and enabling soft deletions.
