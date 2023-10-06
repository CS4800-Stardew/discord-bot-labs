// form for user registration

import React from "react";
import Joi from "joi-browser"; // library for data validation
import Form from "./components/common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" }, // initialize form data
    errors: {}, // initialize form validation errors
  };

  // Joi schema for form validation
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  // handling form submission
  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data); // Register user
      auth.loginWithJwt(response.headers["x-auth-token"]); // Log in user with JWT
      window.location = "/"; // Redirect to home page after successful registration
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  // Render registration form
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;