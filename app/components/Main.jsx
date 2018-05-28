import React from 'react';
import { Route } from "react-router-dom";

import CustomerSearch from "../containers/customers/CustomerSearch";
import MemberPoints from "./memberPoints/MemberPoints";
export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <Route path="/customerSearch" component={CustomerSearch} />
                <Route path="/memberPoints" component={MemberPoints} />
                <Route path="/" component={CustomerSearch} />
            </div>
        )
    }
};