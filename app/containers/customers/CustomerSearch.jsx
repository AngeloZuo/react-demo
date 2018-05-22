import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import _ from "lodash";

import { searchCustomers } from "../../actions/customer/customerSearchActions";
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
        this.customersDataResult = customizeData(nextProps.CustomerSearchReducer.customersDataResult);
    }

    render() {
        const tableConfig = {
            hasCheckbox: true,
            onCheckboxFunc: function(event) {
                selectCheckBox(event)
            },
            sortable: true
        }
        return (
            <Paper className="customerSearchPanel">
                <CustomerSearchConditions onSearchCustomers={this.searchCustomerByCondition}/>
                <CustomerList lists={this.customersDataResult} tableConfig={tableConfig}/>
            </Paper>
        )
    }
};

function getCustomerDetail(params) {
    searchCustomers(params).then((actionObject) => {
        console.log("****", actionObject.searchList);
    });
}

function selectCheckBox(event) {
    console.log("**selectCheckBox1*****", event.target.checked);
    event.target.checked = !event.target.checked;
    console.log("**selectCheckBox2*****", event.target.checked);
}

function customizeData(originData) {
    _.forEach(originData, (arrayChild) => {
        _.forEach(arrayChild, (arrayChildValue, arrayChildKey) => {
            if (arrayChildKey === 'id') {
                arrayChild[arrayChildKey] = {
                    type: 'link',
                    value: arrayChildValue,
                    onActionFunc: function() {
                        getCustomerDetail({id: arrayChildValue})
                    }
                }
            }
        });
    })
    return originData;
}

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