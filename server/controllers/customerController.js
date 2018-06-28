const _ = require("lodash");
const customerService = require("../services/customerService");
const config = require("../config/config");

const { dbName, customerCollection } = config;

const getCustomers = () => {
    return customerService.getCustomersDataFromFile();
};

const getCustomersByCondition = async (queryParams = {}) => {
    _.forEach(queryParams, (value, key) => {
        if (value !== "") {
            queryParams[key] = value;
        } else {
            _.unset(queryParams, key);
        }
    });

    return await customerService.getCustomersDataFromDB({
        dbName,
        collectionName: customerCollection,
        queryParams
    });
};

const addCustomer = async (addData = {}) => {
    return await customerService.addCustomer({
        dbName,
        collectionName: customerCollection,
        addData
    });
};

const deleteCustomers = async customerList => {
    return await customerService.deleteCustomers({
        dbName,
        collectionName: customerCollection,
        customerList
    });
};

const updateCustomer = async customerInfo => {
    return await customerService.updateCustomer({
        dbName,
        collectionName: customerCollection,
        customerInfo
    });
};

module.exports = {
    getCustomers,
    getCustomersByCondition,
    addCustomer,
    deleteCustomers,
    updateCustomer
};
