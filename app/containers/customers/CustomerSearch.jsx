import React from 'react';
import ReactDOM from 'react-dom';

import CustomerSearchConditions from "../../components/customers/CustomerSearchConditions";
import CustomerList from "../../components/customers/CustomerList";

export default class CustomerSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CustomerSearchConditions />
                <CustomerList />
            </div>
        )
    }
};