import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import AllUsers from "./components/AllUsers";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/all" component={AllUsers} />
        <Route path="/details/:index" component={Details} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
