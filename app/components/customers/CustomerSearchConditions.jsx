import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { Button, Input } from "antd";
import _ from "lodash";

const CustomerSearchConditions = props => (
    <Formik
        initialValues={{ id: "", customerName: "" }}
        onSubmit={props.getSearchConditions}
        render={formikProps => (
            <Form noValidate className="customerSearchConditions">
                <div>
                    <Field
                        type="text"
                        name="id"
                        placeholder="Please enter custormer id"
                        component={({ field, ...formProps }) => {
                            return (
                                <div
                                    style={{
                                        display: "inline-block",
                                        marginBottom: 16,
                                        marginRight: 16,
                                        width: "20%"
                                    }}
                                >
                                    <Input
                                        {...field}
                                        {...formProps}
                                        addonBefore="Customer ID"
                                        onChange={formikProps.handleChange}
                                    />
                                </div>
                            );
                        }}
                    />
                    <Field
                        type="text"
                        name="customerName"
                        placeholder="Please enter custormer name"
                        component={({ field, ...formProps }) => {
                            return (
                                <div
                                    style={{
                                        display: "inline-block",
                                        marginBottom: 16,
                                        width: "20%"
                                    }}
                                >
                                    <Input
                                        {...field}
                                        {...formProps}
                                        addonBefore="Customer Name"
                                        onChange={formikProps.handleChange}
                                    />
                                </div>
                            );
                        }}
                    />
                    <Button
                        type="primary"
                        shape="circle"
                        icon="search"
                        onClick={e => {
                            formikProps.handleSubmit(e);
                        }}
                    />
                </div>
            </Form>
        )}
    />
);

CustomerSearchConditions.propTypes = {
    getSearchConditions: PropTypes.func.isRequired
};

CustomerSearchConditions.defaultProps = {
    getSearchConditions: () => {}
}

export default CustomerSearchConditions;
