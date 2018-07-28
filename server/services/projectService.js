const mongoDB = require("../database/mongodb");
const fs = require("fs-extra");

const getProjects = args => {
  const projects = fs.readJson("./server/data/projects.json");
  return projects;
};

module.exports = {
  getProjects
};
