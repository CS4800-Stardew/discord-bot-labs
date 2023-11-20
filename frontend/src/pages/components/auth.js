import React, { Component } from "react";
import auth from "../../services/authService";

class Auth extends Component {
  componentDidMount() {
    // initiate auth process when component is mounted
    this.fetchData();
  }

  // handle extraction and processing of discord auth tokens
  fetchData = async () => {
    try {
      // Extract access token and token type from URL hash
      const fragment = new URLSearchParams(window.location.hash.slice(1));
      const [accessToken, tokenType] = [
        fragment.get("access_token"),
        fragment.get("token_type"),
      ];

      // redirect to home if access token is missing or incorrect
      if (!accessToken) {
        window.location = "/";
      } else {
        // login using obtained token information
        auth.loginWithDiscord(tokenType, accessToken);

        // redirect to dashboard page after successful auth
        window.location = "/dashboard";
      }
    } catch (error) {
      console.error(error);
    }
  };

  // no content to display for component
  render() {
    return null;
  }
}

export default Auth;
