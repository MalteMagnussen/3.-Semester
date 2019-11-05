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
        <div>Select an existing ID.</div>
      </React.Fragment>
    );
  }
};

export default Product;
