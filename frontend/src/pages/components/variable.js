import React, { Component } from "react";
import Joi from "joi-browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import Form from "./common/form";

class Variable extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: props.variable,
      errors: {},
      index: props.index,
      optionsList: [
        [
          {
            label: "Number",
            value: "Number",
          },
          {
            label: "User",
            value: "User",
          },
        ],
      ],
    };
  }

  // Joi schema for validating command name and description
  schema = {
    name: Joi.string().min(1).label("Variable Name"),
    description: Joi.string().label("Variable Description"),
  };

  componentDidUpdate(prevProps, prevState) {
    //Check if the props.action has changed
    if (prevProps.variable !== this.props.variable) {
      this.setState({
        data: this.props.variable,
        errors: {},
        index: this.props.index,
      });
    }

    // notify parent component when the data state changes
    if (prevState.data !== this.state.data) {
      this.props.onDataChange(this.state.data, this.state.index);
    }
  }

  // display form for editing command details
  render() {
    return (
      <div>
        <div className="variable-field-combine">
          {this.renderSpanDropdown("type", "Type", 0)}
          <button
            className="delete-variable-button"
            onClick={() => this.props.removeVariable(this.props.index)}
          >
            <FontAwesomeIcon icon={faX} size="xl" />
          </button>
        </div>
        <div className="variable-field-combine">
          {this.renderSpanInput("name", "&", "Variable Name")}
          {this.renderSwitch("required", "Required")}
        </div>
        {this.renderSpanTextarea("description", "@", 1, "Variable Description")}
      </div>
    );
  }
}

export default Variable;
