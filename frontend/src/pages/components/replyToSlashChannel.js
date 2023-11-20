import React, { Component } from "react";
import Joi from "joi-browser";

import Form from "./common/form";

class ReplyToSlashCommand extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: props.action,
      errors: {},
      cmdId: props.cmdId,
      index: props.index,
      expanded: true,
      optionsList: [
        [
          {
            label: "true",
            value: true,
          },
          {
            label: "false",
            value: false,
          },
        ],
        [],
      ],
    };
  }

  // Joi schema for validating command name and description
  schema = {
    message: Joi.string().min(1).label("message"),
  };

  componentDidUpdate(prevProps, prevState) {
    //Check if the props.action has changed
    if (prevProps.action !== this.props.action) {
      this.setState({
        data: this.props.action,
        errors: {},
        cmdId: this.props.cmdId,
        index: this.props.index,
      });
    }

    // notify parent component when the data state changes
    if (prevState.data !== this.state.data) {
      this.props.onDataChange(
        this.state.cmdId,
        this.state.data,
        this.state.index
      );
    }
  }

  // Function to handle toggling the expansion state of an accordion
  toggleAccordion = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded, // Invert the current value of expanded
    }));
  };

  // display form for editing command details
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
            {this.state.data.effect}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionCommand"
          style={{
            marginBottom: "20px",
          }}
        >
          {this.renderInput("message", "Message Content")}
          {this.renderDropdown("privateReply", "Command reply is private?", 0)}
        </div>
      </div>
    );
  }
}

export default ReplyToSlashCommand;
