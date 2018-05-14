import React from 'react';
import CustomerSearch from "../containers/customers/CustomerSearch";
export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <CustomerSearch />
            </div>
        )
    }
};