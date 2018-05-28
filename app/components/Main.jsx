import React from 'react';
import { Route } from "react-router-dom";

import Home from "./Home";
import CustomerSearch from "../containers/customers/CustomerSearch";
import MemberPoints from "./memberPoints/MemberPoints";
export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <Route exact path="/" component={() => <Home slogan="Welcome, HAHAHA"/>} />
                <Route path="/customerSearch" component={CustomerSearch} />
                <Route path="/memberPoints" component={MemberPoints} />
            </div>
        )
    }
};