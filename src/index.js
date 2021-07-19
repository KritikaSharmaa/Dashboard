import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import NewTask from "./views/NewTask";
import ShowTask from "./views/ShowTask";
import serviceWorker from "./serviceWorker.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/NewTask" component={NewTask} />
      <Route path="/ShowTask" component={ShowTask} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker();
