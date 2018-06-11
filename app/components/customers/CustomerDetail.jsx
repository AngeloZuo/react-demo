import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import Spin from "antd/lib/spin";

import _ from "lodash";

const CustomerDetail = ({
    values,
    handleSubmit,
    isAddCustomer,
    isAdding
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
                                disabled={!isAddCustomer}
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
            <Spin spinning={isAdding}>
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
            </Spin>
        </Form>
    );
};

CustomerDetail.propTypes = {
    customerDetailData: PropTypes.array.isRequired,
    onChangeDialogStatus: PropTypes.func.isRequired,
    isAdding: PropTypes.bool
};

CustomerDetail.defaultProps = {
    customerDetailData: [],
    onChangeDialogStatus: function() {},
    isAdding: false
};

export default CustomerDetail;
