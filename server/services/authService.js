const mongoDB = require("../database/mongodb");

function authUser(args) {
    try {
        return new Promise((resolve, reject) => {
            mongoDB.findDocuments(args, (docs) => {
                if (docs.length === 0) {
                    resolve({
                        isAuth: false
                    });
                } else {
                    resolve({
                        isAuth: true
                    });
                }
            })
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    authUser
};
