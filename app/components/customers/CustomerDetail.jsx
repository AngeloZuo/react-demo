import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import { Input, Spin, Alert } from "antd";

import _ from "lodash";

const CustomerDetail = ({ values, isDisabled, loading, children, tableConfig, errors }) => {
    function getLabel(originLabel) {
        let formatLabel = "";
        _.forEach(tableConfig, configValue => {
            if (configValue.dataIndex === originLabel) {
                formatLabel = configValue.title;
            }
        });

        return formatLabel;
    }

    let elements = Object.keys(values).map(customerKey => (
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
                            <Alert message={errors[customerKey]} type="error" showIcon />
                        ) : null}
                    </div>
                );
            }}
        />
    ));

    return (
        <Spin spinning={loading}>
            <Form>
                {elements}
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
