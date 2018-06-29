import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { Button, Input } from "antd";

const createInputElem = (addonBefore, { field, placeholder }) => {
    return (
        <div
            style={{
                display: "inline-block",
                marginBottom: 16,
                marginRight: 16,
                width: "20%"
            }}
        >
            <Input {...field} placeholder={placeholder} addonBefore={addonBefore} />
        </div>
    );
};

const CustomerSearchConditions = props => (
    <Formik
        initialValues={{ customerName: "", phone: "" }}
        onSubmit={props.getSearchConditions}
        render={({ handleSubmit }) => (
            <Form noValidate className="customerSearchConditions">
                <div>
                    <Field
                        type="text"
                        name="customerName"
                        render={({ field }) => {
                            return createInputElem("Customer Name", {
                                field,
                                placeholder: "Please enter custormer name",
                            })
                        }}
                    />

                    <Field
                        type="text"
                        name="phone"
                        render={({ field }) => {
                            return createInputElem("Phone Number", {
                                field,
                                placeholder: "Please enter phone number",
                            })
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
