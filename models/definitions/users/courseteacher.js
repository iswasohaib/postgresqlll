const { DataTypes } = require("sequelize");

let sequelize = require("../../../common/dbConnection");

const courseteacher = sequelize.define(
  "courseteacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    courseId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    teacherId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "courseteacher",
  }
);

module.exports = courseteacher;
