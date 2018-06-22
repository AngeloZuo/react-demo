import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import _ from "lodash";

import { deleteCustomers } from "../../actions/customer/customerSearchActions";

import CustomerSearchConditions from "../../components/customers/CustomerSearchConditions";
import AzDialog from "../../components/common/AzDialog";
import AzActionGroups from "../../components/common/AzActionGroups";
import AzDeleteModal from "../../components/common/AzDeleteModal";

import CustomerSearch from "./CustomerSearch";
import CustomerAdd from "./CustomerAdd";
import CustomerEdit from "./CustomerEdit";
import CustomerDelete from "./CustomerDelete";

class CustomerContainer extends React.Component {
    constructor(props) {
        super(props);

        this.changeDialogStatus = this.changeDialogStatus.bind(this);
        this.getSearchConditions = this.getSearchConditions.bind(this);
        this.getLinkElement = this.getLinkElement.bind(this);
        this.afterAdded = this.afterAdded.bind(this);
        this.afterDelete = this.afterDelete.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.openAddCustomerDialog = this.openAddCustomerDialog.bind(this);
        
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

    getSearchConditions(conditions) {
        this.setState({
            searchConditions: conditions
        });
    }

    afterAdded() {
        this.setState({
            visibleDialog: false
        });
        this.getSearchConditions({});
    }

    afterDelete() {
        this.setState({
            selectedRows: []
        });
        this.getSearchConditions({});
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
                <CustomerSearchConditions getSearchConditions={this.getSearchConditions} />
                <Button type="primary" icon="plus" onClick={this.openAddCustomerDialog} />
                {selectedRows.length !== 0 && (
                    <AzActionGroups
                        {...{ hasEditBtn: true, hasDeleteBtn: true }}
                        onEditClick={this.onEditClick}
                    >
                        <CustomerDelete deleteInfo={selectedRows} afterDelete={this.afterDelete} />
                    </AzActionGroups>
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
