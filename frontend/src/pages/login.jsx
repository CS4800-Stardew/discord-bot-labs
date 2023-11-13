import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import configData from "../dbl-config.json";

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <a className="login-button" href={configData.discordLoginLink}>
          <FontAwesomeIcon icon={faDiscord} />
          <span>Login with Discord</span>
        </a>
      </div>
    );
  }
}

export default Login;
