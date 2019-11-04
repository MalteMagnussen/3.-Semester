import React from "react";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Content />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </ul>
  );
}

function Content() {
  return (
    <div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
