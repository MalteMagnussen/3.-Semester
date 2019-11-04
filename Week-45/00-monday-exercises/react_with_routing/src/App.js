import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import AllUsers from "./components/AllUsers";
import Details from "./components/Details";
import data from "./data/data.json";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {Welcome}
        </Route>
        <Route path="/all">
          <AllUsers data={data} />
        </Route>
        <Route path="/details/:index">
          <Details data={data} />
        </Route>
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
