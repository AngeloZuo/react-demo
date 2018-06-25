import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { Button, Input } from "antd";

const createInputElem = (addonBefore, eventhandler, { field, ...formProps }) => {
    return (
        <div
            style={{
                display: "inline-block",
                marginBottom: 16,
                marginRight: 16,
                width: "20%"
            }}
        >
            <Input {...field} {...formProps} addonBefore={addonBefore} onChange={eventhandler} />
        </div>
    );
};

const CustomerSearchConditions = props => (
    <Formik
        initialValues={{ customerName: "", phone: "" }}
        onSubmit={props.getSearchConditions}
        render={({ handleChange, handleSubmit }) => (
            <Form noValidate className="customerSearchConditions">
                <div>
                    <Field
                        type="text"
                        name="customerName"
                        placeholder="Please enter custormer name"
                        component={({ field, ...formProps }) => {
                            return createInputElem("Customer Name", handleChange, {
                                field,
                                ...formProps
                            });
                        }}
                    />
                    
                    <Field
                        type="text"
                        name="phone"
                        placeholder="Please enter phone number"
                        component={({ field, ...formProps }) => {
                            return createInputElem("Phone Number", handleChange, {
                                field,
                                ...formProps
                            });
                        }}
                    />

                    <Button
                        type="primary"
                        shape="circle"
                        icon="search"
                        onClick={e => {
                            handleSubmit(e);
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
};

export default CustomerSearchConditions;
