import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Button } from "antd";
import _ from "lodash";

import FetchCustomer from "./FetchCustomer";
import CustomerDetail from "../../components/customers/CustomerDetail";
import { update } from "../../actions/customer/customerSearchActions";

class CustomerEdit extends React.Component {
    state = {
        isEditing: false,
        disabled: true,
    };

    originCustomerData = null;

    updateCustomer = (customerInfo) => {
        this.setState({
            isEditing: true,
            disabled: true
        });
        
        let modifiedCustomer = {
            id: this.originCustomerData.id
        };

        _.forEach(customerInfo, (value, key) => {
            if (customerInfo[key] !== this.originCustomerData[key]) {
                modifiedCustomer[key] = value;
            }
        });

        update(modifiedCustomer).then(() => {
            this.setState({
                isEditing: false
            });
            this.props.afterUpdated();
        });
    };

    readyToUpdate = () => {
        this.setState({
            disabled: false
        });
    };

    render() {
        const { conditions, tableConfig, customerDetailConfig } = this.props;
        const { isEditing, disabled } = this.state;
        return (
            <FetchCustomer conditions={conditions}>
                {({ loading, customers, error }) => {
                    if (loading) {
                        return <div>Loading</div>;
                    }
                    if (error) {
                        return <div>Error</div>;
                    }

                    this.originCustomerData = customers.searchList[0];
                    let detailValues = Object.assign({}, customers.searchList[0]);
                    let tempObj = {};
                    _.forEach(customerDetailConfig, (configValue, key) => {
                        tempObj[key] = detailValues[key];
                    });

                    return (
                        <Formik initialValues={tempObj} onSubmit={this.updateCustomer}>
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
        id: "",
        customerName: "",
        createdDate: "",
        memberPoints: ""
    },
    tableConfig: []
};

export default CustomerEdit;
