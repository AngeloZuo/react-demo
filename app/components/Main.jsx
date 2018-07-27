import React from "react";
import { Route } from "react-router-dom";

import { RouterConfig } from "../config/RouterConfig";
const Main = () => (
  <div className="main">
    {RouterConfig.routes.map((route, routeKey) => {
      return (
        <Route
          exact
          key={routeKey}
          path={route.url}
          component={route.component}
        />
      );
    })}
  </div>
);

export default Main;
