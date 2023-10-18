// form for user registration

import React from "react";
import Joi from "joi-browser"; // library for data validation
import Form from "./components/common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";
import { NavLink } from "react-router-dom"; // library for dynamic routing

class RegisterForm extends Form {
  state = {
    data: { email: "", username: "", password: "" }, // initialize form data
    errors: {}, // initialize form validation errors
  };

  // Joi schema for form validation
  schema = {
    email: Joi.string().min(5).max(255).required().email().label("Email"),
    username: Joi.string().min(2).max(50).required().label("Username"),
    password: Joi.string().min(5).max(255).required().label("Password"),
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
      <div className="auth-container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
        <NavLink className="auth-redirect" to="/login">
          Already have an account? Click here to login!
        </NavLink>
      </div>
    );
  }
}

export default RegisterForm;
