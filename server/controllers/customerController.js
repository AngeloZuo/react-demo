const _ = require("lodash");
const customerService = require("../services/customerService");
const config = require("../config/config");

const { dbName, customerCollection } = config;

const getCustomers = () => {
  return customerService.getCustomersDataFromFile();
};

const getCustomersByCondition = (queryParams = {}) => {
  _.forEach(queryParams, (value, key) => {
    if (value !== "") {
      queryParams[key] = value;
    } else {
      _.unset(queryParams, key);
    }
  });

  try {
    return customerService.getCustomersDataFromDB({
      dbName,
      collectionName: customerCollection,
      queryParams
    });
  } catch (err) {
    return err;
  }
};

const addCustomer = (addData = {}) => {
  return customerService.addCustomer({
    dbName,
    collectionName: customerCollection,
    addData
  });
};

const deleteCustomers = customerList => {
  return customerService.deleteCustomers({
    dbName,
    collectionName: customerCollection,
    customerList
  });
};

const updateCustomer = customerInfo => {
  return customerService.updateCustomer({
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
