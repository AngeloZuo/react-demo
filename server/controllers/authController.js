const _ = require("lodash");
const authService = require("../services/authService");
const config = require("../config/config");

const { dbName, userCollection } = config;

function authUser(queryParams = {}) {
    return authService.authUser({ dbName, collectionName: userCollection, queryParams }).then(data => {
        return data;
    });
}

module.exports = {
    authUser
};
