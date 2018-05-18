import _ from "lodash";
import CommonAjax from "../../ajax/commonAjax";

export function searchCustomers() {
    const commonAjax = new CommonAjax();

    return new Promise((resolve, reject) => {
        commonAjax.get('http://localhost:9091/getCustomers', {}).then((customersData) => {
            resolve({
                type: 'CUSTOMER_SEARCH',
                searchList: customersData.body
            })
        });
    });
}

export function testActions(fakeReturn) {
    return `You input ${fakeReturn}`;
}