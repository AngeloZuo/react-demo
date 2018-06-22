import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import { Input, Spin } from "antd";

import _ from "lodash";

const CustomerDetail = ({
    values,
    isDisabled,
    loading,
    children
}) => {
    let elements = [];
    _.forEach(values, (customerValue, customerKey) =>
        elements.push(
            <Field
                key={customerKey + "_" + customerValue}
                name={customerKey}
                placeholder={`Please enter ${customerKey}`}
                component={({ field, ...props }) => {
                    return (
                        <div style={{ marginBottom: 16 }}>
                            <Input
                                {...field}
                                {...props}
                                disabled={isDisabled}
                                addonBefore={customerKey}
                            />
                        </div>
                    );
                }}
            />
        )
    );

    return (
        <Form>
            <Spin spinning={loading}>
                {elements}
                {children}
            </Spin>
        </Form>
    );
};

CustomerDetail.propTypes = {
    customerDetailData: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    isDisabled: PropTypes.bool
};

CustomerDetail.defaultProps = {
    customerDetailData: [],
    loading: false,
    isDisabled: false
};

export default CustomerDetail;
