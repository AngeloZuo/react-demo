const _ = require("lodash");
const customerService = require("../services/customerService");
const config = require("../config/config");
const dataPropsMapping = {
    key: "key",
    id: "ID",
    customerName: "Customer Name",
    createdDate: "Created Date",
    memberPoints: "Member Points"
}

function getCustomers() {
    return customerService.getCustomersDataFromFile();
    // return customerService.getCustomersDataFromDB();
}

function getCustomersByCondition(queryParams = {}) {
    const { dbName, customerCollection } = config;

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

function formatReturnData() {

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
    return customerService.addCustomers({ dbName, customerCollection, addData }).then((data) => {
        return data;
    });
}

module.exports = {
    getCustomers,
    getCustomersByCondition,
    addCustomers
}