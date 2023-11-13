import React from "react"; // library to use React Components
import { Link, NavLink } from "react-router-dom"; // library for dynamic routing
import "bootstrap/dist/css/bootstrap.css";

//Component for website navigation bar
const NavBar = ({ user }) => {
  return (
    <nav className="navbar">
      <Link className="navbar-title" to="/">
        Discord Bot Labs
      </Link>
      <div className="navbar-links">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Documentation
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <li>
              <NavLink className="nav-link dropdown-item ps-3" to="/tutorial">
                Tutorial
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link dropdown-item ps-3"
                to="/get-started"
              >
                Get Started
              </NavLink>
            </li>
          </ul>
        </li>
        <NavLink className="nav-link" to="/bot-builder">
          Bot Builder
        </NavLink>
        {!user && (
          // Display these links if the user is not logged in
          <React.Fragment>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </React.Fragment>
        )}
        {user && (
          // Display these links if a user is logged in
          <React.Fragment>
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
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
