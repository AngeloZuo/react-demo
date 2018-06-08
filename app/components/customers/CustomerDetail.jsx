import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, withFormik } from "formik";
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import _ from "lodash";

const CustomerDetail = ({ values, handleSubmit, handleChange, isAddCustomer }) => {
    // component={() => <div style={{ marginBottom: 16 }}>
    //                                         <Input disabled={disableInput} addonBefore={customerKey} defaultValue={customerValue} />
    //                                     </div>}

    let elements = [];

    _.forEach(values, (customerValue, customerKey) =>
        elements.push(
            <Field
                key={customerKey + "_" + customerValue}
                type="text"
                disabled={!isAddCustomer}
                name={customerKey}
                placeholder={`Please enter ${customerKey}`}
                onChange={handleChange}
            />
        )
    );

    return (
        <Form>
            {elements}
            {isAddCustomer && (
                <Button
                    type="primary"
                    shape="circle"
                    icon="check"
                    onClick={e => {
                        handleSubmit(e);
                    }}
                />
            )}
        </Form>
    );
};

CustomerDetail.propTypes = {
    customerDetailData: PropTypes.array.isRequired,
    onChangeDialogStatus: PropTypes.func.isRequired
};

CustomerDetail.defaultProps = {
    customerDetailData: [],
    onChangeDialogStatus: function() {}
};

export default CustomerDetail;
