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
  console.log(match);
  console.log(props.data);
  const { index } = useParams();
  return (
    <div className="container">
      <p>Details Page</p>
      <PersonDetails data={props.data} index={index} />
      <Link to="/all">Back</Link>
    </div>
  );
}

const PersonDetails = props => {
  const data = props.data.users;
  const { index } = props;
  const person = data[index];
  const personItems = Object.keys(person);
  const toPrint = personItems.map((item, index) => (
    <Helper person={person} item={item} index={index} />
  ));
  console.log(toPrint);
  return (
    <div>
      Person number: {index}
      <ul>{toPrint}</ul>
    </div>
  );
};

const Helper = props => {
  const { person, item, index } = props;

  if (item !== "picture") {
    return (
      <li key={index}>
        {item} : {person[item]}
      </li>
    );
  } else {
    return null;
  }
};
