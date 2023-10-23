import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function Tutorial() {
    return(
        <div>
            <div className="card my-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.imgur.com/0dG2g3t.png" width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Step #1</h5>
                            <p className="card-text">Click on the link 'Bot Builder'. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.imgur.com/0dG2g3t.png" width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Step #2</h5>
                            <p className="card-text">Click on 'New Command' to create a new command. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.imgur.com/0dG2g3t.png" width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Step #3</h5>
                            <p className="card-text">Fill out your details for a slash command. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.imgur.com/0dG2g3t.png" width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Step #4</h5>
                            <p className="card-text">Add as many actions to create. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tutorial;