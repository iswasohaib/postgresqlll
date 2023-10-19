const { models } = require("../../models/definitions");

module.exports = {
  createcourseteacher: async (req, res) => {
    const { courseId, teacherID } = req.body;
    const courseteacher = {
      courseID: courseId,
      teacherID: teacherID,
    };
    await models.courseteacher.create(courseteacher);
    res.send(courseteacher);
  },
};
