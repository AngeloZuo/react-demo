import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import CustomerSearchConditions from "../../components/customers/CustomerSearchConditions";
import CustomerList from "../../components/customers/CustomerList";

class CustomerSearch extends React.Component {
    constructor(props) {
        super(props);

        this.customersDataResult = [{
            id: '000001',
            customerName: 'Customer_A',
            createdData: '2018-05-01'
        }, {
            id: '000002',
            customerName: 'Customer_B',
            createdData: '2018-05-02'
        }, {
            id: '000003',
            customerName: 'Customer_C',
            createdData: '2018-05-03'
        }, {
            id: '000004',
            customerName: 'Customer_D',
            createdData: '2018-05-04'
        }, {
            id: '000005',
            customerName: 'Customer_E',
            createdData: '2018-05-05'
        }];
    }

    searchCustomerByCondition() {
        this.customersDataResult = [{
            id: '000001',
            customerName: 'Customer_A',
            createdData: '2018-05-01'
        }, {
            id: '000002',
            customerName: 'Customer_B',
            createdData: '2018-05-02'
        }, {
            id: '000003',
            customerName: 'Customer_C',
            createdData: '2018-05-03'
        }, {
            id: '000004',
            customerName: 'Customer_D',
            createdData: '2018-05-04'
        }, {
            id: '000005',
            customerName: 'Customer_E',
            createdData: '2018-05-05'
        }];
    }

    render() {
        return (
            <div>
                <CustomerSearchConditions onClick={this.searchCustomerByCondition} />
                <CustomerList lists={this.customersDataResult} />
            </div>
        )
    }
};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);