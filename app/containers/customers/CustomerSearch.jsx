import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import _ from "lodash";

import { searchCustomers } from "../../actions/customer/customerSearchActions";
import CustomerSearchConditions from "../../components/customers/CustomerSearchConditions";
import CustomerList from "../../components/customers/CustomerList";
import AzDialog from "../../components/common/AzDialog";
import CustomerDetail from "../../components/customers/CustomerDetail";
import AzActionGroups from "../../components/common/AzActionGroups";

class CustomerSearch extends React.Component {
    constructor(props) {
        super(props);

        this.customersDataResult = [];
        this.dialogStatus = {};
        this.searchCustomerByCondition = this.props.searchCustomerByCondition.bind(this);
        this.selectCheckBox = this.selectCheckBox.bind(this);
        this.actionGroupConfig = {
            hasAddBtn: true,
            hasEditBtn: true,
            hasDeleteBtn: true
        }
        this.state = {};
        this.isSearched = false;
    }

    componentWillMount() {
        const mountState = {};
        mountState.searchResult = this.customersDataResult;
    }

    componentWillReceiveProps(nextProps) {
        const searchType = nextProps.CustomerSearchReducer.customerSearchType;
        if (searchType === 'CUSTOMER_SEARCH') {
            this.customersDataResult = nextProps.CustomerSearchReducer.customersDataResult;
        } else if (searchType === 'CUSTOMER_DETAIL_SEARCH') {
            this.dialogStatus = {
                data: nextProps.CustomerSearchReducer.customersDetailResult,
                open: true
            };
        }
    }

    selectCheckBox(event) {
        const name = event.target.value;
        console.log(`*****Checkbox Name*****': ${name}, *****Checkbox Value*****': ${event.target.checked}`);
        if (name === this.tableHeadCellId) {

        } else {
            this.setState({
                [name]: event.target.checked
            })
            console.log(`*****States*****'`, this.state);
        }
    }

    render() {
        return (
            <Paper className="customerSearchPanel">
                <CustomerSearchConditions 
                    onSearchCustomers={this.searchCustomerByCondition}
                />
                {
                    this.customersDataResult.length !== 0
                        ? <div>
                            <AzActionGroups {...this.actionGroupConfig} />
                            <CustomerList lists={this.customersDataResult} onClickIdLink={this.searchCustomerByCondition}/>
                        </div>
                        : this.isSearched && <div>Sorry, no results could be found ! </div>
                }
                {/* TODO: Refactor */}
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
        searchCustomerByCondition(conditions) {
            let searchConditions = {
                searchType: conditions.searchType || 'CUSTOMER_SEARCH',
                conditions: conditions.conditions || conditions
            }
            
            this.isSearched = true;
            searchCustomers(searchConditions).then((actionObject) => {
                dispatch(actionObject);
            });
        }
    }
}

CustomerSearch.propTypes = {
    searchCustomerByCondition: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);