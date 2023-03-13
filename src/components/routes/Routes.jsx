import React from "react";
import { Routes as Switch, Route, Navigate, useRoutes } from "react-router-dom";
import Results from "../results/Results";

function Routes() {
  return (
    <div className="routes">
      <Switch>
        <Route exact path="/" element={<Navigate to="/search" />} />
        {["/search", "/images", "/news", "/videos"].map((path, index) => (
          <Route path={path} element={<Results />} key={index} />
        ))}
      </Switch>
    </div>
  );
}

export default Routes;
