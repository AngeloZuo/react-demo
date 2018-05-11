import React from 'react';
import CustomerSearch from "./customers/CustomerSearch";
import CustomerList from "./customers/CustomerList";
export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <CustomerSearch />
                <CustomerList />
            </div>
        )
    }
};