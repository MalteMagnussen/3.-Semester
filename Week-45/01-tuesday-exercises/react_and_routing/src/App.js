import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        {/* <Route path="/add-book">
          <AddBook />
        </Route> */}
      </Switch>
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
  </ul>
);

const Home = () => <div>Home</div>;
const Product = () => <div>Product</div>;
const Company = () => <div>Company</div>;

export default App;
