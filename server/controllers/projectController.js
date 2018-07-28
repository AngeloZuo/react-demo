const _ = require("lodash");
const projectService = require("../services/projectService");
const config = require("../config/config");

const { dbName, projectCollection } = config;

const getProjects = async (queryParams = {}) => {
  return await projectService.getProjects({
    dbName,
    collectionName: projectCollection,
    queryParams
  });
};

module.exports = {
  getProjects
};
