import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddAction from "./addAction"; // Import Bootstrap JavaScript
import SlashCommand from "./slashCommand";

/*
const Permission = () => {
    return (
        <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input type="text" className="form-control" placeholder="Option name" aria-label="Username"
                   aria-describedby="addon-wrapping"/>
        </div>
    );
}
 */

function CommandForm() {
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
                    <SlashCommand/>
                </div>
            </div>

            <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        2: Action
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                     data-bs-parent="#accordionCommand">
                    <AddAction/>
                </div>
            </div>
        </div>
    );
}

export default CommandForm;