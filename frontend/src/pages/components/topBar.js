import React, { Component } from "react";
import Joi from "joi-browser";
import ds from "../../services/discordService";

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

  // handle switch field value changes
  handleSwitch = ({ currentTarget: input }) => {
    try {
      const data = { ...this.state.data };
      data[input.name] = input.checked;
      if (input.checked) {
        //deploys command if true
        //should check if bot is deployable state later(WIP)
        ds.deployCommand(this.props.guildId, data.name, data.description);
        this.setState({ data });
      } else {
        //deactivates command if false
        ds.deactivateCommand(this.props.guildId, data.name);
        this.setState({ data });
      }
    } catch (error) {
      input.checked = !input.checked;
      console.log("error: ", error);
    }
  };

  handleDelete = () => {
    try {
      const removed = ds.deactivateCommand(
        this.props.guildId,
        this.state.data.name
      );
      this.props.removeCommand();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // display form for editing command details
  render() {
    return (
      <div className="topbar">
        <span className="command-chain">
          Command Type {">"} {this.state.data.trigger.toString()}
        </span>
        {this.renderSwitch("deploy", "Deploy", this.handleSwitch)}
        {this.renderButton(
          "Delete Command",
          () => this.handleDelete(),
          "del-cmd-btn"
        )}
      </div>
    );
  }
}

export default TopBar;
