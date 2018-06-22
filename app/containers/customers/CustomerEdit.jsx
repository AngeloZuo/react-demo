import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Button } from "antd";

import FetchCustomer from "./FetchCustomer";
import CustomerDetail from "../../components/customers/CustomerDetail";

class CustomerEdit extends React.Component {
    state = {
        isEditing: false,
        disabled: true
    };

    updateCustomer = customerInfo => {
        //TODO
        this.setState({
            isEditing: true,
            disabled: true
        });
        console.log("==updateCustomer==", customerInfo);
        setTimeout(() => {
            this.setState({
                isEditing: false
            });
        }, 2000);
        
    };

    readyToUpdate = () => {
        this.setState({
            disabled: false
        });
    };

    render() {
        const { conditions, tableConfig } = this.props;
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

                    return (
                        <Formik
                            initialValues={customers.searchList[0]}
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
    conditions: PropTypes.object.isRequired
};

CustomerEdit.defaultProps = {
    conditions: {}
};

export default CustomerEdit;
