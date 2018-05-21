import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';

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
            <Paper className="customerSearchPanel">
                <CustomerSearchConditions onSearchCustomers={this.searchCustomerByCondition} onInputChange/>
                <CustomerList lists={this.customersDataResult}/>
            </Paper>
        )
    }
};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        searchCustomerByCondition(conditions) {
            searchCustomers(conditions).then((actionObject) => {
                dispatch(actionObject);
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);