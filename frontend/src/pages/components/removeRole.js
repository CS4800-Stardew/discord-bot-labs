import React, { Component } from "react";
import Joi from "joi-browser";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Form from "./common/form";

class RemoveRole extends Form {

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
                        label: "User that ran Slash Command",
                        value: "User that ran Slash Command",
                    },
                    {
                        label: "Use ''",
                        value: "Use ''",
                    },
                ],
                [
                    {
                        label: "Role 1",
                        value: "Role 1",
                    },
                    {
                        label: "Role 2",
                        value: "Role 2",
                    },
                ],
            ],
        };
    }

    // Joi schema for validating command name and description
    schema = {
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

    render() {
        return (
            <div>
                <Accordion.Item eventKey={this.state.index}>
                    <Accordion.Header>{this.state.data.effect}</Accordion.Header>
                    <Accordion.Body>
                        {this.renderDropdown(
                            "member",
                            "Member",
                            0
                        )}
                        {this.renderDropdown(
                            "role",
                            "Role",
                            1
                        )}
                    </Accordion.Body>
                </Accordion.Item>
                <FontAwesomeIcon className="flow-arrow" icon={faArrowDown} size="2xl" />
            </div>
        );
    }
}

export default RemoveRole;