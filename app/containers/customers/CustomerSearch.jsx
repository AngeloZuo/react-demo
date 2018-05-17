import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

import { searchCustomers, testActions } from "../../actions/customer/customerSearchActions";
import CustomerSearchConditions from "../../components/customers/CustomerSearchConditions";
import CustomerList from "../../components/customers/CustomerList";

class CustomerSearch extends React.Component {
    constructor(props) {
        super(props);

        this.customersDataResult = [];
        this.searchCustomerByCondition = this.props.searchCustomerByCondition.bind(this);
    }

    componentWillMount() {
        const mountState = {};
        mountState.searchResult = this.customersDataResult;
    }

    componentWillReceiveProps(nextProps) {
        this.customersDataResult = nextProps.CustomerSearchReducer.customersDataResult;
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
    return {
        searchCustomerByCondition() {
            searchCustomers().then((res) => {
                dispatch({
                    type: 'CUSTOMER_SEARCH',
                    searchList: res.body
                });
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);