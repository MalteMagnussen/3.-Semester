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
export default Find;
