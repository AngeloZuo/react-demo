import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import _ from "lodash";

// import Button from '../common/Button';
// import InputBox from '../common/InputBox';

export default class CustomerSearchConditions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearchCustomer = this.handleSearchCustomer.bind(this);
    }

    handleChange(e) {
        this.setState({
            customerName: e.target.value
        })
    }

    handleSearchCustomer() {
        this.props.onSearchCustomers(this.orgnizeConditions());
    }

    orgnizeConditions() {
        let tempConditions = {};

        _.forEach(this.state, (value, key) => {
            if (value !== '') {
                tempConditions[key] = value;
            }
        });

        return tempConditions;
    }

    render() {
        return (
            <form noValidate autoComplete="off">
                <TextField
                    id="with-placeholder"
                    label="Name"
                    placeholder="Please enter name"
                    margin="normal"
                    value={this.state.customerName}
                    onChange={this.handleChange}
                />
                <Button variant="raised" color="primary" onClick={this.handleSearchCustomer}>
                    Search
                </Button>
            </form>
        )
    }
};