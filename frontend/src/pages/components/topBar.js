import React, { Component } from "react";
import Joi from "joi-browser";

import Form from "./common/form";

class TopBar extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: props.cmd,
      errors: {},
    };
  }

  // Joi schema for validating command name and description
  schema = {
    trigger: Joi.string().min(1).label("Command Trigger Effect"),
  };

  componentDidUpdate(prevProps, prevState) {
    // Check if the props.cmd has changed
    if (prevProps.cmd !== this.props.cmd) {
      this.setState({
        data: this.props.cmd,
        errors: {},
      });
    }

    // notify parent component when the data state changes
    if (prevState.data !== this.state.data) {
      this.props.onDataChange(this.state.data);
    }
  }

  // display form for editing command details
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <span>
          Command Type {">"} {this.state.data.trigger.toString()}
        </span>
        <form>{this.renderSwitch("deploy", "Deploy")}</form>
      </div>
    );
  }
}

export default TopBar;
