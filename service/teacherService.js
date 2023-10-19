const { models } = require("../models/definitions");

module.exports = {
  getTeacher: async () => {
    const result = await models.teacher.findAll();
    return result;
  },
  getTeacherbyid: async (id) => {
    const result = await models.teacher.findOne({
      where: { id },
      include: [
        {
          model: models.course,
          as: "Course",
          attributes: ["coursename"],
          through: { attributes: [] },
        },
      ],
    });
    return result;
  },
  createTeacher: async (data) => {
    const result = await models.teacher.create(data);
    console.log(result);
    return result;
  },
};
