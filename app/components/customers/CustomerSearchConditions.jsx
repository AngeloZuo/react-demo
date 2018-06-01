import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import _ from "lodash";

const CustomerSearchConditions = (props) => (
    <Formik
        initialValues={{ customerID: '', customerName: '' }}
        onSubmit={props.onSearchCustomers}
        render={props =>
            <Form noValidate className="customerSearchConditions">
                <div>
                    <Field
                        type="text"
                        name="customerID"
                        component={() => <Input placeholder="Please enter ID" />}
                        onChange={props.handleChange}
                    />
                    <Field
                        type="text"
                        name="customerName"
                        component={() => <Input placeholder="Please enter name" />}
                        onChange={props.handleChange}
                    />
                </div>
                <Button type="primary" shape="circle" icon="search" onClick={(e) => { props.handleSubmit(e) }} />
            </Form>
        }
    />
)

CustomerSearchConditions.propTypes = {
    onSearchCustomers: PropTypes.func.isRequired
}

export default CustomerSearchConditions;