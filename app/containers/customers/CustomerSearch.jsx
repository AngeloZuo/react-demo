import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import _ from "lodash";

import CustomizeUtils from "../../utils/CustomizeUtils";
import { searchCustomers } from "../../actions/customer/customerSearchActions";
import CustomerSearchConditions from "../../components/customers/CustomerSearchConditions";
import CustomerList from "../../components/customers/CustomerList";
import AzDialog from "../../components/common/AzDialog";
import CustomerDetail from "../../components/customers/CustomerDetail";

class CustomerSearch extends React.Component {
    constructor(props) {
        super(props);

        this.customersDataResult = [];
        this.dialogStatus = {};
        this.searchCustomerByCondition = this.props.searchCustomerByCondition.bind(this);
    }

    componentWillMount() {
        const mountState = {};
        mountState.searchResult = this.customersDataResult;
    }

    componentWillReceiveProps(nextProps) {
        const searchType = nextProps.CustomerSearchReducer.customerSearchType;
        if (searchType === 'CUSTOMER_SEARCH') {
            this.customersDataResult = customizeData(nextProps.CustomerSearchReducer.customersDataResult, this.searchCustomerByCondition);
        } else if (searchType === 'CUSTOMER_DETAIL_SEARCH') {
            this.dialogStatus = {
                data: nextProps.CustomerSearchReducer.customersDetailResult,
                open: true
            };
        }
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
                {this.customersDataResult.length !== 0 && <CustomerList lists={this.customersDataResult} tableConfig={tableConfig}/>}
                <AzDialog className="testAzDialog" dialogStatus={this.dialogStatus}>
                    <CustomerDetail customerDetailData={this.dialogStatus.data}></CustomerDetail>
                </AzDialog>
            </Paper>
        )
    }
};

//TODO Refactor
function customizeData(originData, actionFunc) {
    _.forEach(originData, (arrayChild) => {
        _.forEach(arrayChild, (arrayChildValue, arrayChildKey) => {
            if (arrayChildKey === 'id') {
                arrayChild[arrayChildKey] = CustomizeUtils.getLinkConfigObj({
                    value: arrayChildValue,
                    onActionFunc: function() {
                        actionFunc({
                            searchType: "CUSTOMER_DETAIL_SEARCH",
                            conditions: {
                                id: arrayChildValue
                            }
                        })
                    }
                })
            }
        });
    })
    return originData;
}

function selectCheckBox(event) {
    console.log("**selectCheckBox1*****", event.target.checked);
    event.target.checked = !event.target.checked;
    console.log("**selectCheckBox2*****", event.target.checked);
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        searchCustomerByCondition(searchConditions) {
            searchCustomers(searchConditions).then((actionObject) => {
                dispatch(actionObject);
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);