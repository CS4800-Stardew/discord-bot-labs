import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import botLink from '../images/botBuilder-link.PNG'
import command from '../images/command.PNG'
import details from '../images/details.PNG'
import action from '../images/action.PNG'

function Tutorial() {
    return(
        <div>
            <h1 className="py-5">Tutorial</h1>
            <div className="card my-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={botLink} width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Step #1</h5>
                            <p className="card-text">Click on the link 'Bot Builder'. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={command} width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Step #2</h5>
                            <p className="card-text">Click on 'New Command' to create a new command. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={details} width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Step #3</h5>
                            <p className="card-text">Fill out your details for a slash command. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={action} width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Step #4</h5>
                            <p className="card-text">Add an action to create a response to the command. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tutorial;