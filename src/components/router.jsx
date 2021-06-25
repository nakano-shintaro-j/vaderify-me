import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";

export default () => (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
);
