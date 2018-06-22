import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Button } from "antd";

import CustomerDetail from "../../components/customers/CustomerDetail";
import { addNewCustomer } from "../../actions/customer/customerSearchActions";

class CustomerAdd extends React.Component {
    state = {
        loading: false,
        defaultCustomer: {
            customerName: "",
            phone: "",
            idCard: "",
            memberPoints: ""
        }
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
        const { tableConfig } = this.props;
        const { loading, defaultCustomer } = this.state;
        return (
            <Formik initialValues={defaultCustomer} onSubmit={this.addCustomer}>
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
    initialCustomer: PropTypes.object.isRequired,
    afterAdded: PropTypes.func.isRequired,
    tableConfig: PropTypes.array.isRequired
};

CustomerAdd.defaultProps = {
    initialCustomer: {
        id: "",
        customerName: "",
        createdDate: "",
        memberPoints: ""
    },
    afterAdded: () => {},
    tableConfig: []
};

export default CustomerAdd;
