import React, { Component } from "react";
import Joi from "joi-browser";

import Form from "./common/form";

class SlashCommand extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: props.cmd,
      errors: {},
    };
  }

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

    // Check if the data state has changed
    if (prevState.data !== this.state.data) {
      this.props.onDataChange(this.state.data);
    }
  }

  render() {
    return (
      <div className="accordion-item mb-4">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {"/" + this.state.data.name}
          </button>
        </h2>
        <form
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionCommand"
          style={{
            marginBottom: "20px",
          }}
        >
          {this.renderSpanInput("name", "/", "Command Name")}
          {this.renderSpanInput("description", "@", "Command Description")}
        </form>
      </div>
    );
  }
}

export default SlashCommand;
