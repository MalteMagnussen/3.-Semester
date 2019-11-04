import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Details from "./Details";

export default function AllUsers(props) {
  const data = props.data.users;
  let match = useRouteMatch();

  return (
    <div className="container">
      <h2>All Users</h2>
      <table>
        <thead>
          <tr>
            <th>{/* Image */}</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>
                <img src={`${person.picture.large}`} alt="Persons Image" />
              </td>
              <td>
                {person.first} {person.last}
              </td>
              <td>
                <Link to={`/details/${index}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Back</Link>
    </div>
  );
}
