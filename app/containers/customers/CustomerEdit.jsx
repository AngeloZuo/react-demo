import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Button, Spin } from "antd";
import _ from "lodash";

import FetchCustomer from "./FetchCustomer";
import CustomerDetail from "../../components/customers/CustomerDetail";
import { update } from "../../actions/customerSearchActions";

class CustomerEdit extends React.Component {
  state = {
    isEditing: false,
    disabled: true
  };

  editCustomerId = null;

  updateCustomer = async customerInfo => {
    this.setState({
      isEditing: true,
      disabled: true
    });

    const modifiedCustomer = Object.assign(customerInfo, {
      id: this.editCustomerId
    });

    await update(modifiedCustomer);
    this.setState({
      isEditing: false
    });
    this.props.afterUpdated();
  };

  readyToUpdate = () => {
    this.setState({
      disabled: false
    });
  };

  render() {
    const {
      conditions,
      tableConfig,
      customerDetailConfig,
      validationSchema
    } = this.props;
    const { isEditing, disabled } = this.state;
    return (
      <FetchCustomer conditions={conditions}>
        {({ loading, customers, error }) => {
          if (loading) {
            return (
              <div style={{ width: "100%", textAlign: "center" }}>
                <Spin />
              </div>
            );
          }
          if (error) {
            return <div>Error</div>;
          }

          const customerData = customers.searchList[0];
          this.editCustomerId = customerData.id;
          let tempObj = {};

          Object.keys(customerDetailConfig).find(prop => {
            tempObj[prop] = customerData[prop];
          });

          return (
            <Formik
              validationSchema={validationSchema}
              initialValues={tempObj}
              onSubmit={this.updateCustomer}
            >
              {formikProps => (
                <CustomerDetail
                  {...formikProps}
                  tableConfig={tableConfig}
                  isDisabled={disabled}
                  loading={isEditing}
                >
                  <Button
                    type="primary"
                    shape="circle"
                    icon="edit"
                    onClick={this.readyToUpdate}
                  />
                  {!disabled && (
                    <Button
                      type="primary"
                      shape="circle"
                      icon="check"
                      onClick={e => {
                        formikProps.handleSubmit(e);
                      }}
                    />
                  )}
                </CustomerDetail>
              )}
            </Formik>
          );
        }}
      </FetchCustomer>
    );
  }
}

CustomerEdit.propTypes = {
  conditions: PropTypes.object.isRequired,
  customerDetailConfig: PropTypes.object.isRequired,
  tableConfig: PropTypes.array.isRequired
};

CustomerEdit.defaultProps = {
  conditions: {},
  customerDetailConfig: {
    customerName: "",
    phone: "",
    idCard: "",
    memberPoints: ""
  },
  tableConfig: []
};

export default CustomerEdit;
