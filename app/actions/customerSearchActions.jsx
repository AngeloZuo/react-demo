import CommonAjax from "../ajax/commonAjax";
import { DEV_SERVER_ADDRESS } from "../config/config";

const commonAjax = new CommonAjax();
const searchCustomers = (searchConditions) => {
    return new Promise((resolve, reject) => {
        commonAjax.get(`${DEV_SERVER_ADDRESS}getCustomers`, searchConditions).then((customersData) => {
            resolve({
                searchList: customersData.body
            })
        });
    });
}

const addNewCustomer = (customerInfo) => {
    return new Promise((resolve, reject) => {
        commonAjax.post(`${DEV_SERVER_ADDRESS}addCustomer`, customerInfo).then((returnData) => {
            resolve(returnData)
        });
    });
}

const deleteCustomers = (customerInfo) => {
    return new Promise((resolve, reject) => {
        commonAjax.delete(`${DEV_SERVER_ADDRESS}deleteCustomers`, customerInfo).then((returnData) => {
            resolve(returnData)
        });
    });
}

const update = (customerInfo) => {
    return new Promise((resolve, reject) => {
        commonAjax.update(`${DEV_SERVER_ADDRESS}updateCustomer`, customerInfo).then((returnData) => {
            resolve(returnData)
        });
    });
}

export {
    searchCustomers,
    addNewCustomer,
    deleteCustomers,
    update
}