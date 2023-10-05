// form for user login

import { Navigate } from "react-router-dom"; // 'Navigate' for redirection
import Joi from "joi-browser"; // library for data validation
import Form from "./components/common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" }, // initialize form data
    errors: {}, // initialize form validation errors
  };

  // Joi schema for form validation
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  // handling form submission
  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);

      const { state } = this.props.location;
      // Redirect user to previous page or home page after successful login
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  // Render login form
  render() {
    // Redirect to home page if user is already logged in
    if (auth.getCurrentUser()) return <Navigate to="/" />;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
