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

function App(props) {
  const bookFactory = props.bookFactory;
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
  </ul>
);

const Find = ({ bookFactory }) => {
  const findBook = bookFactory.findBook;
  const initialValue = "";

  const initialBook = { id: "", info: "", title: "" };

  const [book, setBook] = useState({ ...initialBook });

  const [id, setid] = useState(initialValue);

  const handleSubmit = event => {
    event.preventDefault();
    setBook(findBook(id));
    setid("");
  };

  const handleChange = event => {
    setid(event.target.value);
  };

  return (
    <React.Fragment>
      <h3>Find a Book</h3>
      <form>
        <input
          type="number"
          placeholder="ID"
          value={id}
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>Find Book</button>
      </form>

      <br />

      <ShowBook
        book={book}
        deleteBook={bookFactory.deleteBook}
        setid={setid}
        setBook={setBook}
      ></ShowBook>
    </React.Fragment>
  );
};

const ShowBook = ({ book, deleteBook, setBook, setid }) => {
  if (book && book.id) {
    return (
      <div>
        ID: {book.id}
        <br />
        Title: {book.title}
        <br />
        Info: {book.info}
        <br />
        <button
          onClick={() => {
            deleteBook(book.id);
            setBook({ id: "", info: "", title: "" });
            setid("");
          }}
        >
          Delete Book
        </button>
        <br></br>
      </div>
    );
  } else {
    return "No book exists with that ID. ";
  }
};

const Home = () => <div>Home</div>;

const AddBook = ({ bookFactory }) => {
  const initialBook = { id: "", info: "", title: "" };

  const [book, setBook] = useState({ ...initialBook });

  const [isBlocking, setIsBlocking] = useState(false);

  const handleChange = event => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setBook({ ...book, [id]: value });

    const blocking = value.length > 0;
    setIsBlocking(blocking);
  };

  const handleSubmit = event => {
    if (book.title && book.info) {
      event.preventDefault();
      bookFactory.addBook(book);
      setBook({ ...initialBook });
      setIsBlocking(false);
    } else {
      window.alert("Missing Input");
    }
  };

  return (
    <React.Fragment>
      <h2>Add Book</h2>
      <form onChange={handleChange}>
        <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to the ${location.pathname.substr(
              1
            )} page? You are in the process of submitting a new book.`
          }
        />
        <input
          type="text"
          placeholder="Add Title"
          id="title"
          value={book.title}
        />
        <br />
        <input type="text" placeholder="Add Info" id="info" value={book.info} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <p>{JSON.stringify(book)}</p>
    </React.Fragment>
  );
};

const NoMatch = () => (
  <div>Du forsøger at tilgå en ressource der ikke findes</div>
);

export default App;
