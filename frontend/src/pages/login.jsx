import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import ds from "../services/discordService";

class Login extends Component {
  handleDiscordLogin = async () => {
    try {
      const response = await ds.getDiscordLoginLink();
      console.log(response);
      window.location = response.data;
    } catch (error) {
      // Handle errors
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
