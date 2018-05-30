import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import _ from "lodash";

export default class CustomerSearchConditions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: '',
            customerID: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearchCustomer = this.handleSearchCustomer.bind(this);
        this.searchConditions = {
            searchType: 'CUSTOMER_SEARCH',
            conditions: {}
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSearchCustomer() {
        this.props.onSearchCustomers(this.orgnizeConditions());
    }

    orgnizeConditions() {
        let searchConditions = Object.assign({}, this.searchConditions);

        _.forEach(this.state, (value, key) => {
            if (value !== '') {
                searchConditions.conditions[key] = value;
            } else {
                _.unset(searchConditions.conditions, key);
            }
        });

        return searchConditions;
    }

    render() {
        return (
            <form noValidate autoComplete="off" className="customerSearchConditions">
                <div>
                    <TextField 
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
                    />
                </div>
                <Button variant="raised" color="primary" onClick={this.handleSearchCustomer}>
                    Search
                </Button>
            </form>
        )
    }
};

CustomerSearchConditions.propTypes = {
    onSearchCustomers: PropTypes.func.isRequired
}