const fs = require("fs-extra");

const mongoDB = require("../database/mongodb");

function getCustomersDataFromDB(args) {
    try {
        return new Promise((resolve, reject) => {
            mongoDB.findDocuments(args, (docs) => {
                resolve(docs);
            })
        });
    } catch (error) {
        console.error(error);
    }
    
}

function getCustomersDataFromFile() {
    try {
        const customersData = fs.readJson("./server/data/mockData.json");
        return customersData;
    } catch (error) {
        console.error(error);
    }
}

function addCustomers(args) {
    try {
        return new Promise((resolve, reject) => {
            mongoDB.insertDocuments(args, (result) => {
                resolve(result);
            })
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getCustomersDataFromDB,
    getCustomersDataFromFile,
    addCustomers
};