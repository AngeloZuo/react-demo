const mongoDB = require("../database/mongodb");

const authUser = args => {
  return new Promise((resolve, reject) => {
    mongoDB.findDocuments(args, (docs, err) => {
      if (err) reject(err);
      if (docs.length === 0) {
        resolve({ isAuth: false });
      } else {
        resolve({ isAuth: true });
      }
    });
  });
};

module.exports = {
  authUser
};
