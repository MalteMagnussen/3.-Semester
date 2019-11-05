import React, { useState, useEffect } from "react";
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
export default AddBook;
