import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Button } from "antd";
import _ from "lodash";

import {
  searchCustomers,
  addNewCustomer,
  deleteCustomers
} from "../../actions/customer/customerSearchActions";
import CustomerSearchConditions from "../../components/customers/CustomerSearchConditions";
import CustomerList from "../../components/customers/CustomerList";
import AzDialog from "../../components/common/AzDialog";
import CustomerDetail from "../../components/customers/CustomerDetail";
import AzActionGroups from "../../components/common/AzActionGroups";

import FetchCustomerList from "./FetchCustomerList";

class CustomerSearch extends React.Component {
  constructor(props) {
    super(props);

    this.searchCustomerByCondition = this.props.searchCustomerByCondition.bind(
      this
    );
    this.changeDialogStatus = this.changeDialogStatus.bind(this);
    this.addCustomer = this.props.addCustomer.bind(this);
    this.deleteCustomer = this.props.deleteCustomer.bind(this);
    this.testSearchCustomer = this.testSearchCustomer.bind(this);

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
      customerDetail: {},
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
    console.log("=====", conditions);
    this.setState({
      searchConditions: conditions
    });
  }

  render() {
    const {
      customersDataResult,
      selectedRows,
      visibleDialog,
      customerDetailFlag,
      customerDetail,
      confirmLoading,
      isAdding
    } = this.state;
    return (
      <div className="customerSearchPanel">
        <CustomerSearchConditions onSearchCustomers={this.testSearchCustomer} />
        <Button type="primary" icon="plus" onClick={this.openAddCustomerDialog}>
          Add
        </Button>
        {this.state.searchConditions && (
          <FetchCustomerList conditions={this.state.searchConditions}>
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
          </FetchCustomerList>
        )}

        {customersDataResult.length !== 0 ? (
          <div>
            <AzActionGroups
              {...(selectedRows.length !== 0
                ? { hasEditBtn: true, hasDeleteBtn: true }
                : { hasEditBtn: false, hasDeleteBtn: false })}
              onEditClick={this.onEditClick}
              onDeleteClick={this.onDeleteClick}
            />
            <CustomerList
              lists={customersDataResult}
              tableConfig={this.tableConfig}
              checkboxSelection={this.checkboxSelection}
            />
          </div>
        ) : (
          this.isSearched && <div>Sorry, no results could be found ! </div>
        )}

        {visibleDialog && (
          <AzDialog
            classes="customerDetailAzDialog"
            visible={visibleDialog}
            onChangeDialogStatus={this.changeDialogStatus}
            title={this.dialogTitle}
            confirmLoading={confirmLoading}
          >
            {customerDetailFlag === "ADD_CUSTOMER" ? (
              <Formik
                initialValues={customerDetail}
                onSubmit={this.addCustomer}
              >
                {props => (
                  <CustomerDetail
                    {...props}
                    tableConfig={this.tableConfig}
                    isAddCustomer={true}
                    isAdding={isAdding}
                  />
                )}
              </Formik>
            ) : (
              <Formik
                initialValues={customerDetail}
                onSubmit={this.addCustomer}
              >
                {props => (
                  <CustomerDetail {...props} tableConfig={this.tableConfig} />
                )}
              </Formik>
            )}
          </AzDialog>
        )}
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
        dispatch(actionObject);
      });
    },

    addCustomer(customerDetail) {
      const self = this;
      self.setState({
        isAdding: true
      });
      addNewCustomer(customerDetail).then(() => {
        self.setState({
          visibleDialog: false,
          isAdding: false
        });
        this.searchCustomerByCondition({
          searchType: "CUSTOMER_SEARCH",
          conditions: {}
        });
      });
    },

    deleteCustomer() {
      const customerList = this.state.selectedRows;
      console.log(customerList);
      deleteCustomers(customerList).then(result => {
        this.searchCustomerByCondition({
          searchType: "CUSTOMER_SEARCH",
          conditions: {}
        });
      });
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
