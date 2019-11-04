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
  if (person !== null && person !== undefined) {
    const personItems = Object.keys(person);
    const toPrint = personItems.map((item, index) => (
      <Helper person={person} item={item} index={index} />
    ));
    console.log(toPrint);

    return (
      <div>
        Person number: {Number(index + 1)}
        <br />
        <img
          src={`${person.picture.large}`}
          alt="Person Photo"
          align="center"
        />
        <ul>{toPrint}</ul>
      </div>
    );
  } else {
    return <div>No person exists with that ID.</div>;
  }
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
