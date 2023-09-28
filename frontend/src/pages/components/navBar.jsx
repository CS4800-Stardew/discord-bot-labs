// library to use React Components
import React from "react";
// library for dynamic routing
import { Link, NavLink } from "react-router-dom";

//Component for website navigation bar
const NavBar = ({ user }) => {
  return (
    <nav className="navbar">
      <Link className="navbar-title" to="/">
        Discord Bot Labs
      </Link>
      <div className="navbar-links">
        <NavLink className="nav-link" to="/bot-builder">
          Bot Builder
        </NavLink>
        {!user && (
          // Display these links if the user is not logged in
          <React.Fragment>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </React.Fragment>
        )}
        {user && (
          // Display these links if a user is logged in
          <React.Fragment>
            <NavLink className="nav-link" to="/profile">
              {user.name}
            </NavLink>
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
