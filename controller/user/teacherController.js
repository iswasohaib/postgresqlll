const teacherService = require("../../service/teacherService");
const userController = require("./userController");

module.exports = {
  getTeacher: async (req, res) => {
    const data = await teacherService.getTeacher();
    res.send(data);
  },
  getTeacherbyid: async (req, res) => {
    const data = await teacherService.getTeacherbyid(req.params.id);
    res.send(data);
  },
  createTeacher: async (req, res) => {
    const { firstName, lastName, email, phoneNumber, courseID } = req.body;
    const { qualification, yearsOfExperience } = req.body;
    const user = await userController.createUserHelper({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    });

    const teacher = await teacherService.createTeacher({
      qualification: qualification,
      yearsOfExperience: yearsOfExperience,
      userID: user.id,
      courseID: course.id,
    });
    res.send(teacher);
  },
};
