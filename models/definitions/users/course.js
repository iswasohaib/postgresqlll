const { DataTypes } = require("sequelize");

let sequelize = require("../../../common/dbConnection");

const course = sequelize.define(
  "course",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    coursename: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    fee: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "course",
  }
);

module.exports = course;
