import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import _ from "lodash";

const CustomerSearchConditions = (props) => (
    <Formik
        initialValues={{ customerID: '', customerName: '' }}
        onSubmit={props.onSearchCustomers}
        render={props =>
            <Form noValidate className="customerSearchConditions">
                <div>
                    {/* <TextField
                        label="Customer ID"
                        placeholder="Please enter ID"
                        margin="normal"
                        name="customerID"
                        className="customerSearchConditions_Inputbox"
                        value={this.state.customerID}
                        onChange={this.handleChange}
                    />
                    <TextField
                        label="Customer Name"
                        placeholder="Please enter name"
                        margin="normal"
                        name="customerName"
                        className="customerSearchConditions_Inputbox"
                        value={this.state.customerName}
                        onChange={this.handleChange}
                    /> */}
                    <Field
                        type="text"
                        name="customerID"
                        onChange={props.handleChange}
                    />
                    <Field
                        type="text"
                        name="customerName"
                        onChange={props.handleChange}
                    />
                </div>
                <Button variant="raised" type="submit" color="primary" >
                    Search
                </Button>
            </Form>
        }
    />
)

CustomerSearchConditions.propTypes = {
    onSearchCustomers: PropTypes.func.isRequired
}

export default CustomerSearchConditions;