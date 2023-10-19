const studentService = require("../../service/studentService");
const userController = require("./userController");
module.exports = {
  getStudent: async (req, res) => {
    const data = await studentService.getStudent();
    res.send(data);
  },
  createStudent: async (req, res) => {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const { rollnumber, department, semester } = req.body;
    const user = await userController.createUserHelper({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    });
    const student = await studentService.createStudent({
      rollnumber: rollnumber,
      department: department,
      semester: semester,
      userID: user.id,
    });
    res.send(student);
  },
  createStudentHelper: async (data) => {
    const studentdata = await studentService.createStudent(data);
    return studentdata;
  },
};
