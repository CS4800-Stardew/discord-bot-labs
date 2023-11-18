// base class for creating forms with input validation using Joi
// handles form data, validation, submission, and rendering of input fields and buttons

import React, { Component } from "react";
import Joi from "joi-browser"; // library for data validation
import Input from "./input";
import Select from "./select";
import SpanInput from "./spanInput";
import Switch from "./switch";

class Form extends Component {
  state = {
    data: {}, // object to hold form data
    errors: {}, // object to hold validation errors
  };

  // validate entire form using Joi
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // validate single property (field) using Joi
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] }; // create schema for the field
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null; // Return error message or null if no error
  };

  // handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior
    const errors = this.validate(); // validate form
    this.setState({ errors: errors || {} }); // set errors in the state (empty object if no errors)
    if (errors) return; // if errors, return early and do not proceed with form submission
    this.doSubmit();
  };

  // handle input field value changes
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }; // clone current errors object
    const errorMessage = this.validateProperty(input); // validate input field
    if (errorMessage) errors[input.name] = errorMessage;
    // Set error message if validation fails
    else delete errors[input.name]; // remove error if validation succeeds
    const data = { ...this.state.data }; // clone current data object
    data[input.name] = input.value; // update data object with new field value
    this.setState({ data, errors }); // update state with new data and errors
  };

  // handle switch field value changes
  handleSwitchChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }; // clone current errors object
    const data = { ...this.state.data };
    data[input.name] = input.checked;
    this.setState({ data, errors });
  };

  // render submit button with conditional disabling
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  // render select input field
  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  // render input field with specified type (default is "text")
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  // render span input field with specified type (default is "text")
  // span is in replacement of the label and in front of the input
  renderSpanInput(name, label, placeholder, type = "text") {
    const { data, errors } = this.state;
    return (
      <SpanInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  //render switch component
  renderSwitch(name, label) {
    const { data, errors } = this.state;
    return (
      <Switch
        name={name}
        label={label}
        checked={data[name]}
        onChange={this.handleSwitchChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
