import _ from "lodash";
import CommonAjax from "../../ajax/commonAjax";

export function searchCustomers() {
    const commonAjax = new CommonAjax();

    return commonAjax.get('http://localhost:9091/getCustomer', {});
    // return {
    //     type: 'CUSTOMER_SEARCH',
    //     searchList: [{
    //         id: '000001',
    //         customerName: 'Customer_A',
    //         createdData: '2018-05-01'
    //     }, {
    //         id: '000002',
    //         customerName: 'Customer_B',
    //         createdData: '2018-05-02'
    //     }, {
    //         id: '000003',
    //         customerName: 'Customer_C',
    //         createdData: '2018-05-03'
    //     }, {
    //         id: '000004',
    //         customerName: 'Customer_D',
    //         createdData: '2018-05-04'
    //     }, {
    //         id: '000005',
    //         customerName: 'Customer_E',
    //         createdData: '2018-05-05'
    //     }]
    // }
}

export function testActions(fakeReturn) {
    return `You input ${fakeReturn}`;
}