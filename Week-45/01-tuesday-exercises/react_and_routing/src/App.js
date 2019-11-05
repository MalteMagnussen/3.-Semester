import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App(props) {
  const bookFactory = props.bookFactory;
  return (
    <Router>
      <Header />
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
          <AddBook />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
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
const Product = props => {
  const bookFactory = props.bookFactory;
  return <div>Product</div>;
};
const Company = () => <div>Company</div>;
const AddBook = () => <div>Add Book</div>;

const NoMatch = () => (
  <div>Du forsøger at tilgå en ressource der ikke findes</div>
);

export default App;
