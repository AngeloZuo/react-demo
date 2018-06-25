import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Button } from "antd";

import CustomerDetail from "../../components/customers/CustomerDetail";
import { addNewCustomer } from "../../actions/customer/customerSearchActions";

class CustomerAdd extends React.Component {
    state = {
        loading: false
    };

    addCustomer = customerInfo => {
        this.setState({
            loading: true
        });
        addNewCustomer(customerInfo).then(() => {
            this.setState({
                loading: false
            });
            this.props.afterAdded();
        });
    };

    render() {
        const { tableConfig, customerDetailConfig } = this.props;
        const { loading } = this.state;
        return (
            <Formik initialValues={customerDetailConfig} onSubmit={this.addCustomer}>
                {formikProps => (
                    <CustomerDetail
                        {...formikProps}
                        tableConfig={tableConfig}
                        isDisabled={false}
                        loading={loading}
                    >
                        <Button
                            type="primary"
                            shape="circle"
                            icon="check"
                            onClick={e => {
                                formikProps.handleSubmit(e);
                            }}
                        />
                    </CustomerDetail>
                )}
            </Formik>
        );
    }
}

CustomerAdd.propTypes = {
    customerDetailConfig: PropTypes.object.isRequired,
    afterAdded: PropTypes.func.isRequired,
    tableConfig: PropTypes.array.isRequired
};

CustomerAdd.defaultProps = {
    customerDetailConfig: {
        id: "",
        customerName: "",
        createdDate: "",
        memberPoints: ""
    },
    afterAdded: () => {},
    tableConfig: []
};

export default CustomerAdd;
