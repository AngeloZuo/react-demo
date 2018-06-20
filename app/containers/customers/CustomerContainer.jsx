import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import _ from "lodash";

import CustomerSearchConditions from "../../components/customers/CustomerSearchConditions";
import AzDialog from "../../components/common/AzDialog";
import AzActionGroups from "../../components/common/AzActionGroups";

import CustomerSearch from "./CustomerSearch";
import CustomerAdd from "./CustomerAdd";
import CustomerEdit from "./CustomerEdit";

class CustomerContainer extends React.Component {
    constructor(props) {
        super(props);

        this.changeDialogStatus = this.changeDialogStatus.bind(this);
        this.testSearchCustomer = this.testSearchCustomer.bind(this);
        this.getLinkElement = this.getLinkElement.bind(this);
        this.afterAdded = this.afterAdded.bind(this);

        this.openAddCustomerDialog = this.openAddCustomerDialog.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.state = {
            selectedRows: [],
            detailSearchConditions: null,
            visibleDialog: false,
            searchConditions: null
        };

        this.tableConfig = [
            {
                title: "ID",
                dataIndex: "id"
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

    afterAdded(addedMessage) {
        console.log("===", addedMessage);
        this.setState({
            visibleDialog: false
        });
        this.testSearchCustomer({});
    }

    render() {
        const {
            customerDetail,
            selectedRows,
            visibleDialog,
            customerDetailFlag,
            detailSearchConditions,
            confirmLoading,
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
                    <CustomerSearch
                        tableConfig={this.tableConfig}
                        conditions={searchConditions}
                        onLinkClick={this.getLinkElement}
                        onChbClick={this.checkboxSelection}
                    />
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
                            <CustomerEdit
                                conditions={detailSearchConditions}
                                tableConfig={this.tableConfig}
                            />
                        ) : (
                            <CustomerAdd
                                initialCustomer={customerDetail}
                                tableConfig={this.tableConfig}
                                afterAdded={this.afterAdded}
                            />
                        )}
                    </AzDialog>
                )}
            </div>
        );
    }
}

CustomerContainer.propTypes = {};

CustomerContainer.defaultProps = {};

export default CustomerContainer;
