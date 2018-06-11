import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import _ from "lodash";

const CustomerSearchConditions = props => (
    <Formik
        initialValues={{ customerID: "", customerName: "" }}
        onSubmit={props.onSearchCustomers}
        render={props => (
            <Form noValidate className="customerSearchConditions">
                <div>
                    <Field
                        type="text"
                        name="customerID"
                        placeholder="Please enter custormer id"
                        component={({ field, ...props }) => {
                            return (
                                <div style={{ marginBottom: 16 }}>
                                    <Input
                                        {...field}
                                        {...props}
                                        addonBefore="Customer ID"
                                    />
                                </div>
                            );
                        }}
                    />
                    <Field
                        type="text"
                        name="customerName"
                        placeholder="Please enter custormer name"
                        component={({ field, ...props }) => {
                            console.log("==field==", field);
                            console.log("==props==", props);
                            return (
                                <div style={{ marginBottom: 16 }}>
                                    <Input
                                        {...field}
                                        {...props}
                                        addonBefore="Customer Name"
                                    />
                                </div>
                            );
                        }}
                    />
                </div>
                <Button
                    type="primary"
                    shape="circle"
                    icon="search"
                    onClick={e => {
                        props.handleSubmit(e);
                    }}
                />
            </Form>
        )}
    />
);

CustomerSearchConditions.propTypes = {
    onSearchCustomers: PropTypes.func.isRequired
};

export default CustomerSearchConditions;
