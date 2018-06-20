import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Button } from "antd";
import _ from "lodash";

import { addNewCustomer } from "../../actions/customer/customerSearchActions";
import CustomerSearchConditions from "../../components/customers/CustomerSearchConditions";
import CustomerList from "../../components/customers/CustomerList";
import AzDialog from "../../components/common/AzDialog";
import CustomerDetail from "../../components/customers/CustomerDetail";
import AzActionGroups from "../../components/common/AzActionGroups";

import FetchCustomer from "./FetchCustomer";

class CustomerSearch extends React.Component {
    constructor(props) {
        super(props);

        this.changeDialogStatus = this.changeDialogStatus.bind(this);
        this.testSearchCustomer = this.testSearchCustomer.bind(this);
        this.testAddCustomer = this.testAddCustomer.bind(this);

        this.openAddCustomerDialog = this.openAddCustomerDialog.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.state = {
            selectedRows: [],
            actionGroupConfig: {
                hasAddBtn: true,
                hasEditBtn: false,
                hasDeleteBtn: false
            },
            customersDataResult: [],
            detailSearchConditions: null,
            visibleDialog: false,
            isAdding: false,
            searchConditions: null
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
            onChange: (selectedCell, selectedRows) => {
                console.log("==selectedRows==", selectedRows);
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
                    this.setState({
                        detailSearchConditions: {
                            id: displayContent
                        },
                        visibleDialog: true
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
                customersDataResult: nextProps.CustomerSearchReducer.customersDataResult
            });
        } else if (searchType === "CUSTOMER_DETAIL_SEARCH") {
            this.setState({
                visibleDialog: true,
                customerDetailFlag: "CUSTOMER_DETAIL_SEARCH",
                customerDetail: nextProps.CustomerSearchReducer.customersDetailResult[0]
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

    onEditClick() {
        console.log("=onEditClick=", this.state.selectedRows);
    }

    onDeleteClick() {
        this.deleteCustomer();
    }

    testSearchCustomer(conditions) {
        this.setState({
            searchConditions: conditions
        });
    }

    testAddCustomer(customerInfo) {
        this.setState({
            isAdding: true
        });
        addNewCustomer(customerInfo).then(() => {
            this.setState({
                visibleDialog: false,
                isAdding: false
            });
            this.testSearchCustomer({});
        });
    }

    render() {
        const {
            customerDetail,
            selectedRows,
            visibleDialog,
            customerDetailFlag,
            detailSearchConditions,
            confirmLoading,
            isAdding,
            searchConditions
        } = this.state;
        return (
            <div className="customerSearchPanel">
                <CustomerSearchConditions onSearchCustomers={this.testSearchCustomer} />
                <Button type="primary" icon="plus" onClick={this.openAddCustomerDialog}>
                    Add
                </Button>
                {selectedRows.length !== 0 && (
                    <AzActionGroups
                        {...{ hasEditBtn: true, hasDeleteBtn: true }}
                        onEditClick={this.onEditClick}
                        onDeleteClick={this.onDeleteClick}
                    />
                )}
                {searchConditions && (
                    <FetchCustomer conditions={searchConditions}>
                        {({ loading, customers, error }) => {
                            if (loading) {
                                return <div>Loading</div>;
                            }
                            if (error) {
                                return <div>Error</div>;
                            }

                            return (
                                <CustomerList
                                    lists={customers.searchList}
                                    tableConfig={this.tableConfig}
                                    checkboxSelection={this.checkboxSelection}
                                />
                            );
                        }}
                    </FetchCustomer>
                )}

                {visibleDialog && (
                    <AzDialog
                        classes="customerDetailAzDialog"
                        visible={visibleDialog}
                        onChangeDialogStatus={this.changeDialogStatus}
                        title={this.dialogTitle}
                        confirmLoading={confirmLoading}
                    >
                        {customerDetailFlag !== "ADD_CUSTOMER" ? (
                            <FetchCustomer conditions={detailSearchConditions}>
                                {({ loading, customers, error }) => {
                                    if (loading) {
                                        return <div>Loading</div>;
                                    }
                                    if (error) {
                                        return <div>Error</div>;
                                    }

                                    return (
                                        <Formik
                                            initialValues={customers.searchList[0]}
                                            onSubmit={() => {}}
                                        >
                                            {props => (
                                                <CustomerDetail
                                                    {...props}
                                                    tableConfig={this.tableConfig}
                                                />
                                            )}
                                        </Formik>
                                    );
                                }}
                            </FetchCustomer>
                        ) : (
                            <Formik initialValues={customerDetail} onSubmit={this.testAddCustomer}>
                                {props => (
                                    <CustomerDetail
                                        {...props}
                                        tableConfig={this.tableConfig}
                                        isAddCustomer={true}
                                        isAdding={isAdding}
                                    />
                                )}
                            </Formik>
                        )}
                    </AzDialog>
                )}
            </div>
        );
    }
}

CustomerSearch.propTypes = {};

CustomerSearch.defaultProps = {};

export default CustomerSearch;
