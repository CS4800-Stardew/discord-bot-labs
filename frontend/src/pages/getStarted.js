import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function GetStarted() {
    return (
        <div>
            <div className="card my-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.imgur.com/0dG2g3t.png" width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Step #1</h5>
                            <p className="card-text">Turn on “Developer mode” in your Discord account. </p>
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
                            <p className="card-text">Turn on “Developer mode” in your Discord account. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://discordpy.readthedocs.io/en/stable/_images/discord_create_app_button.png"
                             width="600px" className="img-fluid rounded-start" alt="New Application button"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Step #3</h5>
                            <p className="card-text">In the Developer portal, click on “Applications”. Log in again
                                then, back in the “Applications” menu, click on “New Application”. </p>
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
                            <p className="card-text">Name your bot then click "Create". </p>
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
                            <h5 className="card-title">Step #5</h5>
                            <p className="card-text">Go to the "Bot" menu and generate a token using "Add Bot". </p>
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
                            <h5 className="card-title">Step #6</h5>
                            <p className="card-text">Add the bot token to. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;