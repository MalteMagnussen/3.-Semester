import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Details(props) {
  const match = useRouteMatch();

  return (
    <div className="container">
      <p>Details Page</p>

      <Switch>
        <Route path={`${match.path}/:id`}>
          <PersonDetails data={props.data} />
        </Route>
        <Route path={match.path}>
          <h4>Please select a proper user.</h4>
          <Link to="/all">Back</Link>
        </Route>
      </Switch>
    </div>
  );
}

const PersonDetails = props => {
  const data = props.data.users;
  const { id } = useParams();
  const person = data[id];

  return (
    <ul>
      {Object.keys(person).forEach((key, index) => (
        <li key={index}>
          {key} : {person[key]}
        </li>
      ))}
    </ul>
  );
};
