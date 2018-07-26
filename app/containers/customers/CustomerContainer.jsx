import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import _ from "lodash";
import * as yup from "yup";

import CustomerSearchConditions from "../../components/customers/CustomerSearchConditions";
import AzDialog from "../../components/common/AzDialog";
import AzActionGroups from "../../components/common/AzActionGroups";

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
    this.afterSearch = this.afterSearch.bind(this);
    this.afterAdded = this.afterAdded.bind(this);
    this.afterDelete = this.afterDelete.bind(this);
    this.afterUpdated = this.afterUpdated.bind(this);
    this.openAddCustomerDialog = this.openAddCustomerDialog.bind(this);

    this.state = {
      selectedRows: [],
      detailSearchConditions: null,
      visibleDialog: false,
      isSearching: false,
      searchConditions: null,
      customerDetailConfig: {
        customerName: "",
        phone: "",
        idCard: "",
        memberPoints: ""
      }
    };

    this.tableConfig = [
      {
        title: "Customer Name",
        dataIndex: "customerName"
      },
      {
        title: "Phone Number",
        dataIndex: "phone"
      },
      {
        title: "ID Card",
        dataIndex: "idCard"
      },
      {
        title: "Member Points",
        dataIndex: "memberPoints"
      },
      {
        title: "Created Date",
        dataIndex: "createdDate"
      }
    ];

    this.dialogTitle = "";

    this.checkboxSelection = {
      onChange: (selectedCell, selectedRows) => {
        let tempArray = [];
        _.forEach(selectedRows, selectRow => {
          tempArray.push({ id: selectRow.id });
        });
        this.setState({
          selectedRows: tempArray
        });
      }
    };

    this.customerInfoSchema = yup.object().shape({
      customerName: yup.string().required("Customer Name is Required"),
      phone: yup.string().required("Phone number is Required"),
      idCard: yup.string().required("ID Card is Required"),
      memberPoints: yup
        .number()
        .positive("Member Points Should be a Postive Number")
        .required("Member Points is Required")
    });
  }

  getLinkElement(displayContent, record) {
    return (
      <a
        href="javascript:void(0);"
        onClick={() => {
          this.dialogTitle = "Edit Customer";
          this.setState({
            customerDetailFlag: "",
            detailSearchConditions: {
              id: record.id
            },
            visibleDialog: true
          });
        }}
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
      customerDetailFlag: "ADD_CUSTOMER"
    });
    this.dialogTitle = "Add Customer";
  }

  getSearchConditions(conditions) {
    this.setState({
      searchConditions: conditions,
      isSearching: true
    });
  }

  afterSearch() {
    this.setState({
      isSearching: false
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

  afterUpdated() {
    this.setState({
      visibleDialog: false,
      customerDetailFlag: "",
      detailSearchConditions: null
    });
    this.getSearchConditions({});
  }

  render() {
    const {
      selectedRows,
      visibleDialog,
      customerDetailFlag,
      detailSearchConditions,
      confirmLoading,
      searchConditions,
      customerDetailConfig,
      isSearching
    } = this.state;
    return (
      <div className="customerSearchPanel">
        <CustomerSearchConditions
          getSearchConditions={this.getSearchConditions}
        />
        <Button
          type="primary"
          icon="plus"
          onClick={this.openAddCustomerDialog}
        />
        {selectedRows.length !== 0 && (
          <AzActionGroups>
            <CustomerDelete
              deleteInfo={selectedRows}
              afterDelete={this.afterDelete}
            />
          </AzActionGroups>
        )}

        {searchConditions && (
          <CustomerSearch
            tableConfig={this.tableConfig}
            conditions={searchConditions}
            onLinkClick={this.getLinkElement}
            onChbClick={this.checkboxSelection}
            isSearching={isSearching}
            afterSearch={this.afterSearch}
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
                customerDetailConfig={customerDetailConfig}
                afterUpdated={this.afterUpdated}
                validationSchema={this.customerInfoSchema}
              />
            ) : (
              <CustomerAdd
                customerDetailConfig={customerDetailConfig}
                tableConfig={this.tableConfig}
                afterAdded={this.afterAdded}
                validationSchema={this.customerInfoSchema}
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
