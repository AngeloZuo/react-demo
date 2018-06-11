import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Formik } from "formik";
import Button from "antd/lib/button";
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

        this.searchCustomerByCondition = this.props.searchCustomerByCondition.bind(
            this
        );
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
            customerDetail: {},
            visibleDialog: false
        };

        this.tableConfig = [
            {
                title: "ID",
                dataIndex: "id",
                render: displayContent => this.getLinkElement(displayContent)
            },
            {
                title: "Customer Name",
                dataIndex: "customerName"
            },
            {
                title: "Created Date",
                dataIndex: "createdDate"
            },
            {
                title: "Member Points",
                dataIndex: "memberPoints"
            }
        ];

        this.isSearched = false;
        this.dialogTitle = "";

        this.checkboxSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                let tempArray = [];
                _.forEach(selectedRows, selectRow => {
                    tempArray.push({ id: selectRow.id });
                });
                this.setState({
                    selectedRows: tempArray
                });
            }
        };
    }

    getLinkElement(displayContent) {
        return (
            <a
                href="javascript:void(0);"
                onClick={() =>
                    this.searchCustomerByCondition({
                        searchType: "CUSTOMER_DETAIL_SEARCH",
                        conditions: {
                            id: displayContent
                        }
                    })
                }
            >
                {displayContent}
            </a>
        );
    }

    changeDialogStatus() {
        this.setState({
            visibleDialog: !this.state.visibleDialog
        });
    }

    componentWillReceiveProps(nextProps) {
        const searchType = nextProps.CustomerSearchReducer.customerSearchType;
        if (searchType === "CUSTOMER_SEARCH") {
            this.setState({
                customersDataResult:
                    nextProps.CustomerSearchReducer.customersDataResult
            });
        } else if (searchType === "CUSTOMER_DETAIL_SEARCH") {
            this.setState({
                visibleDialog: true,
                customerDetailFlag: "CUSTOMER_DETAIL_SEARCH",
                customerDetail:
                    nextProps.CustomerSearchReducer.customersDetailResult[0]
            });
            this.dialogTitle = "Customer Detail";
        }
    }

    openAddCustomerDialog() {
        this.setState({
            visibleDialog: true,
            customerDetailFlag: "ADD_CUSTOMER",
            customerDetail: {
                id: "",
                customerName: "",
                createdDate: "",
                memberPoints: ""
            }
        });
        this.dialogTitle = "Add Customer";
    }

    render() {
        const {
            customersDataResult,
            selectedRows,
            visibleDialog,
            customerDetailFlag,
            customerDetail
        } = this.state;
        return (
            <div className="customerSearchPanel">
                <CustomerSearchConditions
                    onSearchCustomers={this.searchCustomerByCondition}
                />
                <Button
                    type="primary"
                    icon="plus"
                    onClick={this.openAddCustomerDialog}
                >
                    Add
                </Button>
                {customersDataResult.length !== 0 ? (
                    <div>
                        <AzActionGroups
                            {...(selectedRows.length !== 0
                                ? { hasEditBtn: true, hasDeleteBtn: true }
                                : { hasEditBtn: false, hasDeleteBtn: false })}
                        />
                        <CustomerList
                            lists={customersDataResult}
                            tableConfig={this.tableConfig}
                            checkboxSelection={this.checkboxSelection}
                        />
                    </div>
                ) : (
                    this.isSearched && (
                        <div>Sorry, no results could be found ! </div>
                    )
                )}

                <AzDialog
                    classes="customerDetailAzDialog"
                    visible={visibleDialog}
                    onChangeDialogStatus={this.changeDialogStatus}
                    title={this.dialogTitle}
                >
                    {visibleDialog &&
                        (customerDetailFlag === "ADD_CUSTOMER" ? (
                            <Formik
                                initialValues={customerDetail}
                                onSubmit={this.addCustomer}
                            >
                                {props => (
                                    <CustomerDetail
                                        {...props}
                                        tableConfig={this.tableConfig}
                                        isAddCustomer={true}
                                    />
                                )}
                            </Formik>
                        ) : (
                            <Formik
                                initialValues={customerDetail}
                                onSubmit={this.addCustomer}
                            >
                                {props => (
                                    <CustomerDetail
                                        {...props}
                                        tableConfig={this.tableConfig}
                                    />
                                )}
                            </Formik>
                        ))}
                </AzDialog>
            </div>
        );
    }
}

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
                searchType: conditions.searchType || "CUSTOMER_SEARCH",
                conditions: conditions.conditions || conditions
            };
            searchCustomers(searchConditions).then(actionObject => {
                this.isSearched = true;
                dispatch(actionObject);
            });
        },

        addCustomer(customerDetail) {
            console.log("+++", customerDetail);
        }
    };
}

CustomerSearch.propTypes = {
    searchCustomerByCondition: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerSearch);
