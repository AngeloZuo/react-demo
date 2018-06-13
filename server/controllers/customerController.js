const _ = require("lodash");
const customerService = require("../services/customerService");
const config = require("../config/config");

const { dbName, customerCollection } = config;

function getCustomers() {
    return customerService.getCustomersDataFromFile();
    // return customerService.getCustomersDataFromDB();
}

function getCustomersByCondition(queryParams = {}) {
    

    _.forEach(queryParams, (value, key) => {
        if (value !== '') {
            queryParams[key] = value;
        } else {
            _.unset(queryParams, key);
        }
    });

    return customerService.getCustomersDataFromDB({ dbName, customerCollection, queryParams }).then((data) => {
        _.forEach(data, (value, key) => {
            _.unset(value, "_id");
        });
        return data;
    });
}

function addCustomer (addData = {}) {
    return customerService.addCustomer({ dbName, customerCollection, addData }).then((data) => {
        return data;
    });
}

function deleteCustomers(customerList) { 
    return customerService.deleteCustomers({ dbName, customerCollection, customerList }).then((data) => {
        return data;
    });
}

module.exports = {
    getCustomers,
    getCustomersByCondition,
    addCustomer,
    deleteCustomers
}