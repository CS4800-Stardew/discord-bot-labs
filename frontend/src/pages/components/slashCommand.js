import React, { Component } from "react";
import Joi from "joi-browser";
import Accordion from "react-bootstrap/Accordion";

import Form from "./common/form";

class SlashCommand extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: props.cmd,
      errors: {},
    };
  }

  // Joi schema for validating command name and description
  schema = {
    name: Joi.string().min(1).label("Command Name"),
    description: Joi.string().label("Command Description"),
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
      <Accordion.Item eventKey="9999">
        <Accordion.Header>{"/" + this.state.data.name}</Accordion.Header>
        <Accordion.Body>
          {this.renderSpanInput("name", "/", "Command Name")}
          {this.renderSpanTextarea(
            "description",
            "@",
            1,
            "Command Description"
          )}
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default SlashCommand;
