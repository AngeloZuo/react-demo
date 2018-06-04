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

        this.dialogStatus = {};
        this.searchCustomerByCondition = this.props.searchCustomerByCondition.bind(this);
        this.state = {
            selectedRows: [],
            actionGroupConfig: {
                hasAddBtn: true,
                hasEditBtn: false,
                hasDeleteBtn: false
            },
            customersDataResult: []
        };
        this.isSearched = false;

        this.checkboxSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                let tempArray = [];
                _.forEach(selectedRows, (selectRow) => {
                    tempArray.push({ id: selectRow.id });
                });
                this.setState({
                    selectedRows: tempArray
                });
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        const searchType = nextProps.CustomerSearchReducer.customerSearchType;
        if (searchType === 'CUSTOMER_SEARCH') {
            this.setState({
                customersDataResult: nextProps.CustomerSearchReducer.customersDataResult
            });
        } else if (searchType === 'CUSTOMER_DETAIL_SEARCH') {
            this.dialogStatus = {
                data: nextProps.CustomerSearchReducer.customersDetailResult,
                open: true
            };
        }
    }

    render() {
        return (
            <Paper className="customerSearchPanel">
                <CustomerSearchConditions
                    onSearchCustomers={this.searchCustomerByCondition}
                />
                {
                    this.state.customersDataResult.length !== 0
                        ? <div>
                            <AzActionGroups {
                                ...(() => {
                                    if (this.state.selectedRows.length !== 0) {
                                        return {
                                            hasEditBtn: true,
                                            hasDeleteBtn: true
                                        }
                                    }
                                    return {
                                        hasEditBtn: false,
                                        hasDeleteBtn: false
                                    }
                                })()
                            } />
                            <CustomerList
                                lists={this.state.customersDataResult}
                                onClickIdLink={this.searchCustomerByCondition}
                                checkboxSelection={this.checkboxSelection}
                            />
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
            this.setState({
                selectedRows: []
            });
            let searchConditions = {
                searchType: conditions.searchType || 'CUSTOMER_SEARCH',
                conditions: conditions.conditions || conditions
            }
            searchCustomers(searchConditions).then((actionObject) => {
                this.isSearched = true;
                dispatch(actionObject);
            });
        }
    }
}

CustomerSearch.propTypes = {
    searchCustomerByCondition: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);