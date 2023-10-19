const { models } = require("../models/definitions");

module.exports = {
  getCourse: async () => {
    const result = await models.course.findAll();
    return result;
  },
  createCourse: async (data) => {
    const result = await models.course.create(data);
    console.log(result);
    return result;
  },
};
