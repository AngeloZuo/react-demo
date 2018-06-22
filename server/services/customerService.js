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

function addCustomer(args) {
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

function deleteCustomers(args) {
    try {
        return new Promise((resolve, reject) => {
            let customerListLength = args.customerList.length;
            const resultMsg = `Delete ${customerListLength} items successfully!`
            mongoDB.removeDocument(args, (result) => {
                resolve({
                    resultMsg: resultMsg
                });
            })
        });
    } catch (error) {
        console.error(error);
    }
}

function updateCustomer(args) {
    try {
        return new Promise((resolve, reject) => {
            const resultMsg = `Update data successfully!`
            mongoDB.updateDocument(args, (result) => {
                resolve({
                    resultMsg: resultMsg
                });
            })
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getCustomersDataFromDB,
    getCustomersDataFromFile,
    addCustomer,
    deleteCustomers,
    updateCustomer
};