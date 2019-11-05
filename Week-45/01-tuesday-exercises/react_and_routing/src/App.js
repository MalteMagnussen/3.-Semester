import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  Link
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
          <AddBook bookFactory={bookFactory} />
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

const Product = ({ bookFactory }) => {
  const { getBooks, findBook, deleteBook, addBook } = bookFactory;
  const match = useRouteMatch();

  return (
    <React.Fragment>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Info</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {getBooks().map(({ id, title, info }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{info}</td>
              <td>
                <Link to={`${match.url}/${id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Route path={`${match.url}/:id`}>
        <Details findBook={findBook} />
      </Route>
    </React.Fragment>
  );
};

const Details = ({ findBook }) => {
  let { id } = useParams();
  const book = findBook(id);
  if (book) {
    return (
      <React.Fragment>
        <br />
        <div>Details about book with id: {id} </div>
        <p>
          Title: {book.title}
          <br></br>
          Details: {book.info}
        </p>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <br></br>
        <div>No book exists with that ID. </div>
      </React.Fragment>
    );
  }
};

const Company = () => <div>Company</div>;

const AddBook = ({ bookFactory }) => {
  const initialBook = { id: "", info: "", title: "" };

  const [book, setBook] = useState(initialBook);

  const handleChange = event => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setBook({ ...book, [id]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    bookFactory.addBook(book);
  };

  return (
    <React.Fragment>
      <h2>Add Book</h2>
      <form onChange={handleChange}>
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
