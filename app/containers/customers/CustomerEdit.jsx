import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

import FetchCustomer from "./FetchCustomer";
import CustomerDetail from "../../components/customers/CustomerDetail";

const CustomerEdit = props => {
    const { conditions, tableConfig } = props;
    let isEditing = false;

    function updateCustomer(customerInfo) {
        //TODO
    }

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
                    <Formik initialValues={customers.searchList[0]} onSubmit={() => {}}>
                        {props => <CustomerDetail {...props} tableConfig={tableConfig} />}
                    </Formik>
                );
            }}
        </FetchCustomer>
    );
};

CustomerEdit.propTypes = {
    conditions: PropTypes.object.isRequired
};

CustomerEdit.defaultProps = {
    conditions: {}
};

export default CustomerEdit;
