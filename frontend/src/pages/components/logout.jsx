import React, { Component } from "react";
import auth from "../../services/authService";
import ds from "../../services/discordService";

class Logout extends Component {
  componentDidMount() {
    // log user out by removing authentication token
    auth.logout();
    //removes activeGuildData set
    ds.removeActiveGuildData();

    // Redirect user to home page after logout
    window.location = "/";
  }

  render() {
    // no content to display for component
    return null;
  }
}

export default Logout;
