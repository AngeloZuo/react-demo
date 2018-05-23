const _ = require("lodash");
const customerService = require("../services/customerService");
const config = require("../config/config");

function getCustomers() {
    return customerService.getCustomersDataFromFile();
    // return customerService.getCustomersDataFromDB();
}

function getCustomersByCondition(queryParams = {}) {
    const { dbName, customerCollection } = config;
    return customerService.getCustomersDataFromDB({dbName, customerCollection, queryParams}).then((data) => {

        let formatData = [];

        _.forEach(data, (value, key) => {
            let { id, customerName, createdDate } = value;
            formatData.push({ id, customerName, createdDate });
        });

        return formatData;
    });
}

function addCustomers(addData = {}) {
    addData = [{
        "id": "000001",
        "customerName": "Customer_A",
        "createdDate": "2018-05-01"
    }, {
        "id": "000002",
        "customerName": "Customer_B",
        "createdDate": "2018-05-02"
    }, {
        "id": "000003",
        "customerName": "Customer_C",
        "createdDate": "2018-05-03"
    }, {
        "id": "000004",
        "customerName": "Customer_D",
        "createdDate": "2018-05-04"
    }, {
        "id": "000005",
        "customerName": "Customer_E",
        "createdDate": "2018-05-05"
    }];
    
    const { dbName, customerCollection } = config;
    return customerService.addCustomers({dbName, customerCollection, addData}).then((data) => {
        return data;
    });
}

module.exports = {
    getCustomers,
    getCustomersByCondition,
    addCustomers
}