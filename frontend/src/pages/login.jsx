import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import ds from "../services/discordService";
import "./login.css";

class Login extends Component {
  // fetches discord login link from backend and redirects to said link
  handleDiscordLogin = async () => {
    try {
      const response = await ds.getDiscordLoginLink();
      window.location = response;
    } catch (error) {
      // handle errors
      console.error("Error logging in with Discord:", error);
    }
  };

  render() {
    return (
      <div className="login-container">
        <button className="login-button" onClick={this.handleDiscordLogin}>
          <FontAwesomeIcon icon={faDiscord} />
          <span>Login with Discord</span>
        </button>
      </div>
    );
  }
}

export default Login;
