const courseService = require("../../service/courseService");
module.exports = {
  getCourse: async (req, res) => {
    const data = await courseService.getCourse();
    res.send(data);
  },
  createCourse: async (req, res) => {
    const { coursename, fee, studentID } = req.body;
    const course = await courseService.createCourse({
      coursename: coursename,
      fee: fee,
      studentID: studentID,
    });
    res.send(course);
  },
  createCourseHelper: async (data) => {
    const Coursedata = await courseService.createCourse(data);
    return Coursedata;
  },
};
