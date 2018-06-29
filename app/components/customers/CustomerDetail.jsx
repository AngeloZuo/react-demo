import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import { Input, Spin, Alert } from "antd";

const CustomerDetail = ({ values, isDisabled, loading, children, tableConfig, errors }) => {
    const getLabel = originLabel => {
        const foundItem = tableConfig.find(element => element.dataIndex === originLabel);
        return foundItem ? foundItem.title : "";
    };

    return (
        <Spin spinning={loading}>
            <Form>
                {Object.keys(values).map(customerKey => (
                    <Field
                        key={customerKey}
                        name={customerKey}
                        render={({ field }) => {
                            return (
                                <div style={{ marginBottom: 16 }}>
                                    <Input
                                        {...field}
                                        disabled={isDisabled}
                                        addonBefore={getLabel(customerKey)}
                                        placeholder={`Please enter ${customerKey}`}
                                    />
                                    {typeof errors[customerKey] === "string" ? (
                                        <Alert
                                            message={errors[customerKey]}
                                            type="error"
                                            showIcon
                                        />
                                    ) : null}
                                </div>
                            );
                        }}
                    />
                ))}
                {children}
            </Form>
        </Spin>
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
