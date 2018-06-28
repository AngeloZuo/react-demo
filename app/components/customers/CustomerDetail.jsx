import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import { Input, Spin, Alert } from "antd";

import _ from "lodash";

const CustomerDetail = ({ values, isDisabled, loading, children, tableConfig, errors }) => {
    let elements = [];

    function getLabel(originLabel) {
        let formatLabel = "";
        _.forEach(tableConfig, configValue => {
            if (configValue.dataIndex === originLabel) {
                formatLabel = configValue.title;
            }
        });

        return formatLabel;
    }

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
                                addonBefore={getLabel(customerKey)}
                            />
                            {typeof errors[customerKey] === "string" ? (
                                <Alert message={errors[customerKey]} type="error" showIcon />
                            ) : null}
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
    loading: PropTypes.bool,
    isDisabled: PropTypes.bool
};

CustomerDetail.defaultProps = {
    loading: false,
    isDisabled: false
};

export default CustomerDetail;
