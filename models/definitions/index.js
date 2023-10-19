let sequelize = require("../../common/dbConnection");

let user = require("./users/user");
let student = require("./users/student");
const course = require("./users/course");
const teacher = require("./users/teacher");

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
student.hasMany(course, {
  onDelete: "CASCADE",
  foreignKey: { name: "studentID", allowNull: false, unique: true },
});
course.belongsTo(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "studentID", allowNull: false, unique: true },
});
course.belongsToMany(teacher, {
  onDelete: "CASCADE",
  through: "courseteacher",
  as: "Teacher",
  foreignKey: { name: "courseID", allowNull: false, unique: true },
});
teacher.belongsToMany(course, {
  onDelete: "CASCADE",
  through: "courseteacher",
  as: "Course",
  foreignKey: { name: "teacherID", allowNull: false, unique: true },
});
const models = sequelize.models;

console.log(models);

const db = {};

db.sequelize = sequelize;

module.exports = { db, models };
