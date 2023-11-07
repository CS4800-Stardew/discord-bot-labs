import React, { Component } from "react";

class SlashCommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        command: "",
        description: "",
      },
    };
  }

  updatedCmdList = [];

  reeeeeee() {
    console.log(this.state.formData);
  }

  updatedCommand(updatedName) {
    let found = false;

    for (let i = 0; i < this.updatedCmdList.length; i++) {
      if (this.updatedCmdList[i].index === updatedName.index) {
        this.updatedCmdList[i] = { ...this.updatedCmdList[i], ...updatedName };
        found = true;
        break;
      }
    }
    if (!found) {
      this.updatedCmdList.push(updatedName);
    }

    this.props.onNameChange(this.updatedCmdList);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  getData = () => {
    return JSON.stringify(this.state.formData);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.formData !== this.state.formData) {
      this.updatedCommand(this.state.formData);
    }
  }

  render() {
    const { command, description } = this.state.formData;

    return (
      <form>
        <div className="input-group my-3 px-5">
          <span className="input-group-text" id="addon-wrapping">
            /
          </span>
          <input
            type="text"
            value={command}
            onChange={this.handleInputChange}
            name="command"
            className="form-control"
            aria-label="commandName"
            placeholder="ex. ban"
            required
          />
        </div>

        <div className="input-group my-3 px-5">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            className="form-control"
            name="description"
            value={description}
            onChange={this.handleInputChange}
            placeholder="Description of command"
            aria-label="Description"
            aria-describedby="addon-wrapping"
          />
        </div>
      </form>
    );
  }
}

export default SlashCommand;
