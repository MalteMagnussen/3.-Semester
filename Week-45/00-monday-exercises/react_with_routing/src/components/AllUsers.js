import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function AllUsers(props) {
  return (
    <div className="container">
      <h2>All Users</h2>
      <Link to="/">Back</Link>
    </div>
  );
}
