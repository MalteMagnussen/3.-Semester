import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container">
      <h1>Welcome to our friends site</h1>
      <Link to="/all">See all users</Link>
    </div>
  );
}
