const _ = require("lodash");
const authService = require("../services/authService");
const config = require("../config/config");

const { dbName, userCollection } = config;

const authUser = async (queryParams = {}) => {
    return await authService.authUser({ dbName, collectionName: userCollection, queryParams });
};

module.exports = {
    authUser
};
