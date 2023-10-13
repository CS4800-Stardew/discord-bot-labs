import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TestAction from "./addAction"; // Import Bootstrap JavaScript

const Permission = () => {
    return (
        <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input type="text" className="form-control" placeholder="Option name" aria-label="Username"
                   aria-describedby="addon-wrapping"/>
        </div>
    );
}

class CommandForm extends Component {

    state = {
        commands: [
            {
                type: '',
                name: '',
                description: ''
            }
        ],
        optionForm: false,
        permissionForm: false,
        addAction: false
    }

    render() {
        return (
            <div className="accordion" id="accordionCommand">
                <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1: Name
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                         data-bs-parent="#accordionCommand">
                        <div className="input-group my-3 px-5">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">Command Type
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Slash '/'</a></li>
                                <li><a className="dropdown-item" href="#">Trigger</a></li>
                            </ul>

                            <input type="text" className="form-control" aria-label="commandName" placeholder="ex. ban"/>
                        </div>

                        <div className="input-group my-3 px-5">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input type="text" className="form-control" placeholder="Description of command"
                                   aria-label="Username"
                                   aria-describedby="addon-wrapping"/>
                        </div>

                        <button type="button" className="btn btn-secondary mb-3"
                                onClick={() => this.setState({permissionForm: !this.state.permissionForm})}>
                            Permissions
                        </button>

                        <div id="collapseOne">
                            {this.state.permissionForm ? <Permission/> : null}
                        </div>
                    </div>
                </div>

                <div id="collapseOne">
                    <TestAction/>
                </div>

                <button type="button" className="btn btn-secondary mb-3" name="add">
                    Save
                </button>
                <button type="button" className="btn btn-secondary mb-3" name="add">
                    Submit
                </button>

            </div>
        );
    }

}

export {CommandForm};