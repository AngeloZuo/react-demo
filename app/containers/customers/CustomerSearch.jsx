import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from 'antd/lib/button';
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

        this.searchCustomerByCondition = this.props.searchCustomerByCondition.bind(this);
        this.changeDialogStatus = this.changeDialogStatus.bind(this);
        this.addCustomer = this.props.addCustomer.bind(this);
        this.openAddCustomerDialog = this.openAddCustomerDialog.bind(this);
        this.state = {
            selectedRows: [],
            actionGroupConfig: {
                hasAddBtn: true,
                hasEditBtn: false,
                hasDeleteBtn: false
            },
            customersDataResult: [],
            customerDetail: [],
            visibleDialog: false
        };

        this.tableConfig = [{
            title: 'ID',
            dataIndex: 'id',
            render: (displayContent) => this.getLinkElement(displayContent),
        }, {
            title: 'Customer Name',
            dataIndex: 'customerName',
        }, {
            title: 'Created Date',
            dataIndex: 'createdDate',
        }, {
            title: 'Member Points',
            dataIndex: 'memberPoints',
        }];

        this.isSearched = false;
        this.dialogTitle = "";

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

    getLinkElement(displayContent) {
        return <a
            href="javascript:void(0);"
            onClick={() => this.searchCustomerByCondition({
                searchType: 'CUSTOMER_DETAIL_SEARCH',
                conditions: {
                    id: displayContent
                }
            })}
        >
            {displayContent}
        </a>
    }

    changeDialogStatus() {
        if (this.state.customerDetailFlag === "ADD_CUSTOMER") {

        }
        this.setState({
            visibleDialog: false
        });
    }

    componentWillReceiveProps(nextProps) {
        const searchType = nextProps.CustomerSearchReducer.customerSearchType;
        if (searchType === 'CUSTOMER_SEARCH') {
            this.setState({
                customersDataResult: nextProps.CustomerSearchReducer.customersDataResult
            });
        } else if (searchType === 'CUSTOMER_DETAIL_SEARCH') {
            this.setState({
                visibleDialog: true,
                customerDetailFlag: "CUSTOMER_DETAIL_SEARCH",
                customerDetail: nextProps.CustomerSearchReducer.customersDetailResult
            });
            this.dialogTitle = "Customer Detail";
        }
    }

    openAddCustomerDialog() {
        this.setState({
            visibleDialog: true,
            customerDetailFlag: "ADD_CUSTOMER",
            customerDetail: [{ id: "", customerName: "", createdDate: "", memberPoints: "" }]
        });
        this.dialogTitle = "Add Customer";
    }

    render() {
        return (
            <div className="customerSearchPanel">
                <CustomerSearchConditions
                    onSearchCustomers={this.searchCustomerByCondition}
                />
                <Button type="primary" icon="plus" onClick={this.openAddCustomerDialog}>Add</Button>
                {
                    this.state.customersDataResult.length !== 0
                        ? <div>
                            <AzActionGroups {
                                ...(this.state.selectedRows.length !== 0
                                    ? { hasEditBtn: true, hasDeleteBtn: true }
                                    : { hasEditBtn: false, hasDeleteBtn: false }
                                )
                            } />
                            <CustomerList
                                lists={this.state.customersDataResult}
                                tableConfig={this.tableConfig}
                                checkboxSelection={this.checkboxSelection}
                            />
                        </div>
                        : this.isSearched && <div>Sorry, no results could be found ! </div>
                }

                <AzDialog classes="customerDetailAzDialog" visible={this.state.visibleDialog} onChangeDialogStatus={this.changeDialogStatus} title={this.dialogTitle}>
                    <CustomerDetail customerDetailFlag={this.state.customerDetailFlag} customerDetailData={this.state.customerDetail} tableConfig={this.tableConfig} customerDetailAction={this.addCustomer}/>
                </AzDialog>
            </div>
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
        },

        addCustomer(customerDetail) {
            console.log("+++", customerDetail);
        }
    }
}

CustomerSearch.propTypes = {
    searchCustomerByCondition: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);