import _ from "lodash";
import CommonAjax from "../../ajax/commonAjax";
import { DEV_SERVER_ADDRESS } from "../../config/config";

export function searchCustomers(searchConditions) {
    const commonAjax = new CommonAjax();
    return new Promise((resolve, reject) => {
        commonAjax.get(`${DEV_SERVER_ADDRESS}getCustomers`, searchConditions.conditions).then((customersData) => {
            resolve({
                type: searchConditions.searchType,
                searchList: customersData.body
            })
        });
    });
}

export function testActions(fakeReturn) {
    return `You input ${fakeReturn}`;
}