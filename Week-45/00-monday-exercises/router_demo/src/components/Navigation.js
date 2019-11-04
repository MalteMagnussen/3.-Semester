import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = props => {
  const { location } = props;
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink activeClassName="active" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
