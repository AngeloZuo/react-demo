import React from 'react';
import ReactDOM from 'react-dom';

import CustomerSearchConditions from "./CustomerSearchConditions";
import CustomerList from "./CustomerList";

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