const fs = require("fs-extra");
const moment = require("moment");
const _ = require("lodash");

const mongoDB = require("../database/mongodb");
const utils = require("../util");

const getCustomersDataFromDB = args => {
    return new Promise((resolve, reject) => {
        mongoDB.findDocuments(args, (docs, err) => {
            err ? reject(err) : resolve(docs);
        });
    });
};

const getCustomersDataFromFile = () => {
    try {
        const customersData = fs.readJson("./server/data/mockData.json");
        return customersData;
    } catch (error) {
        console.error(error);
    }
};

const addCustomer = args => {
    let tempArray = [];
    let addData = args.addData;

    addData["createdDate"] = moment().format();
    addData["id"] = utils.getUuid();
    if (_.isArray(addData)) {
        tempArray = addData;
    } else {
        tempArray.push(addData);
    }

    args["dataList"] = tempArray;

    return new Promise((resolve, reject) => {
        mongoDB.insertDocuments(args, (docs, err) => {
            err ? reject(err) : resolve(docs);
        });
    });
};

const deleteCustomers = args => {
    return new Promise((resolve, reject) => {
        let customerListLength = args.customerList.length;
        const resultMsg = `Delete ${customerListLength} items successfully!`;
        mongoDB.removeDocument(args, (docs, err) => {
            err ? reject(err) : resolve({ resultMsg: resultMsg });
        });
    });
};

const updateCustomer = args => {
    return new Promise((resolve, reject) => {
        const resultMsg = `Update data successfully!`;
        mongoDB.updateDocument(args, (docs, err) => {
            err ? reject(err) : resolve({ resultMsg: resultMsg });
        });
    });
};

module.exports = {
    getCustomersDataFromDB,
    getCustomersDataFromFile,
    addCustomer,
    deleteCustomers,
    updateCustomer
};
