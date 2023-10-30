import React, { Component } from "react";
import auth from "../../services/authService";

class Logout extends Component {
  componentDidMount() {
    // log user out by removing authentication token
    auth.logout();

    // Redirect user to home page after logout
    window.location = "/";
  }

  render() {
    // no content to display for component
    return null;
  }
}

export default Logout;
