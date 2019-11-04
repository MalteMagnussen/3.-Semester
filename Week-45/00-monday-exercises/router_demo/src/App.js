import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import { withRouter } from "react-router";

const NavBarWithRouter = withRouter(Navigation);

function App() {
  return (
    <Router>
      <div>
        <NavBarWithRouter />
        <Switch>
          <Route path="/" component={Home} exact />{" "}
          {/* Exact is so that Home doesn't show up on all other pages */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
          {/* This is the 404 page - Notice no Path */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
