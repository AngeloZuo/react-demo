import React from 'react';
import { Route } from "react-router-dom";

import { RouterConfig } from "../config/RouterConfig";
export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                {
                    RouterConfig.routes.map((route, routeKey) => {
                        let tempComponent = route.component;
                        return <Route
                            exact
                            key={routeKey}
                            path={route.url}
                            component={route.component}
                        />
                    })
                }
            </div>
        )
    }
};