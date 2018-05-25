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
        this.customizeData = this.customizeData.bind(this);
        this.selectCheckBox = this.selectCheckBox.bind(this);
        this.tableConfig = {
            hasCheckbox: true,
            sortable: true
        }
        this.state = {}
    }

    componentWillMount() {
        const mountState = {};
        mountState.searchResult = this.customersDataResult;
    }

    componentWillReceiveProps(nextProps) {
        const searchType = nextProps.CustomerSearchReducer.customerSearchType;
        if (searchType === 'CUSTOMER_SEARCH') {
            this.customersDataResult = this.customizeData(nextProps.CustomerSearchReducer.customersDataResult, this.searchCustomerByCondition);
        } else if (searchType === 'CUSTOMER_DETAIL_SEARCH') {
            this.dialogStatus = {
                data: nextProps.CustomerSearchReducer.customersDetailResult,
                open: true
            };
        }
    }

    customizeData(originData, actionFunc) {
        const self = this;
        _.forEach(originData, (arrayChild, arrayChildKey) => {
            if (this.tableConfig.hasCheckbox) {
                this.setState({
                    [`TableBodyChb_${arrayChildKey}`]: false
                });
                let checkBoxObj = CustomizeUtils.getCheckboxObj({
                    value: `TableBodyChb_${arrayChildKey}`,
                    id: `TableBodyChb_${arrayChild["id"]}`,
                    checked: this.state[`TableBodyChb_${arrayChildKey}`],
                    onActionFunc: function (event) {
                        (function(event) {
                            self.selectCheckBox(event)
                        })(event)
                    }
                })
                arrayChild["checkbox"] = checkBoxObj;
            }

            _.forEach(arrayChild, (arraySubValue, arraySubKey) => {
                if (arraySubKey === 'id') {
                    arrayChild[arraySubKey] = CustomizeUtils.getLinkConfigObj({
                        value: arraySubValue,
                        onActionFunc: function() {
                            actionFunc({
                                searchType: "CUSTOMER_DETAIL_SEARCH",
                                conditions: {
                                    id: arraySubValue
                                }
                            })
                        }
                    })
                }
            });
        })
        return originData;
    }

    //TODO Refactor
    selectCheckBox(event) {
        const name = event.target.value;
        this.setState = {
            [name]: event.target.checked
        }
        console.log("**selectCheckBox1*****", this.state);
    }

    render() {
        return (
            <Paper className="customerSearchPanel">
                <CustomerSearchConditions onSearchCustomers={this.searchCustomerByCondition}/>
                {this.customersDataResult.length !== 0 && <CustomerList lists={this.customersDataResult} tableConfig={this.tableConfig}/>}
                <AzDialog classes="customerDetailAzDialog" dialogStatus={this.dialogStatus} hasToolbar={true}>
                    <CustomerDetail customerDetailData={this.dialogStatus.data}></CustomerDetail>
                </AzDialog>
            </Paper>
        )
    }
};

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