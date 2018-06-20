import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

import CustomerDetail from "../../components/customers/CustomerDetail";
import { addNewCustomer } from "../../actions/customer/customerSearchActions";

const CustomerAdd = props => {
    const { initialCustomer, afterAdded, tableConfig } = props;
    let isAdding = false;

    function addCustomer(customerInfo) {
        isAdding = true;
        addNewCustomer(customerInfo).then(() => {
            afterAdded();
            isAdding = false;
        });
    }

    return (
        <Formik initialValues={initialCustomer} onSubmit={addCustomer}>
            {formikProps => (
                <CustomerDetail
                    {...formikProps}
                    tableConfig={tableConfig}
                    isAddCustomer={true}
                    isAdding={isAdding}
                />
            )}
        </Formik>
    );
};

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
