import React from "react";
import Joi from "joi-browser";
import Accordion from "react-bootstrap/Accordion";

import Form from "./common/form";
import Variable from "./variable";

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

  addVariable() {
    const newVariable = {
      type: "",
      name: "",
      description: "",
      required: false,
    };
    const updatedVariables = [...this.state.data.variables, newVariable];
    this.setState({
      data: {
        ...this.state.data,
        variables: updatedVariables,
      },
    });
  }

  removeVariable(index) {
    const updatedVariables = this.state.data.variables.filter(
      (_, i) => i !== index
    );

    this.setState({
      data: {
        ...this.state.data,
        variables: updatedVariables,
      },
    });
  }

  updateVariable(updatedData, index) {
    let updatedVariables = this.state.data.variables;
    updatedVariables[index] = updatedData;
    this.setState({
      data: {
        ...this.state.data,
        variables: updatedVariables,
      },
    });
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
          <Accordion>
            <Accordion.Item>
              <Accordion.Header>Variables</Accordion.Header>
              <Accordion.Body>
                {this.state.data.variables.map((variable, index) => (
                  <Variable
                    key={index}
                    variable={variable}
                    index={index}
                    onDataChange={(updatedData) =>
                      this.updateVariable(updatedData, index)
                    }
                    removeVariable={() => this.removeVariable(index)}
                  />
                ))}
                <button
                  type="button"
                  id="button"
                  className="btn btn-info mb-3"
                  onClick={() => {
                    this.addVariable();
                  }}
                >
                  Add Variable
                </button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default SlashCommand;
