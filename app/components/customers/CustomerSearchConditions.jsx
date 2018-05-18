import React from 'react';
import ReactDOM from 'react-dom';
import _ from "lodash";

import Button from '../common/Button';
import InputBox from '../common/InputBox';

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
            <div>
                Name: <InputBox placeholder="Please enter search condition" value={this.state.customerName} onChange={this.handleChange}/>
                <Button btnValue="Search" onClick={this.handleSearchCustomer}/>
            </div>
        )
    }
};