import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  Link,
  Prompt
} from "react-router-dom";
import Company from "./components/Company";
import Product from "./components/Product";
import Find from "./components/Find";
import AddBook from "./components/AddBook";
import Currency from "./components/Currency";

function App(props) {
  const bookFactory = props.bookFactory;
  const coinFactory = props.coinFactory;
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Product bookFactory={bookFactory} />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/add-book">
            <AddBook bookFactory={bookFactory} />
          </Route>
          <Route path="/find">
            <Find bookFactory={bookFactory} />
          </Route>
          <Route path="/coins">
            <Currency coinFactory={coinFactory} />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Header = () => (
  <ul className="header">
    <li>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/products">
        Products
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/add-book">
        Add Book
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/company">
        Company
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/find">
        Find Book
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/coins">
        Currency
      </NavLink>
    </li>
  </ul>
);

const Home = () => <div>Home</div>;

const NoMatch = () => (
  <div>Du forsøger at tilgå en ressource der ikke findes</div>
);

export default App;
