import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import devMode from '../images/dev-mode.PNG'
import appTab from '../images/applications.PNG'
import create from '../images/create.PNG'
import botTab from '../images/bot.PNG'

function GetStarted() {
    return (
        <div>
            <h1 className="py-5">Get Started</h1>
            <div className="card my-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={devMode} width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Step #1</h5>
                            <p className="card-text">Turn on “Developer mode” in your Discord settings. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={appTab} width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Step #2</h5>
                            <p className="card-text">Click the link provided in the Developer mode and navigate to the
                            the Applications tab.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src="https://discordpy.readthedocs.io/en/stable/_images/discord_create_app_button.png"
                             width="600px" className="img-fluid rounded-start" alt="New Application button"/>
                    </div>
                    <div className="col-md-7">
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
                    <div className="col-md-5">
                        <img src={create} width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Step #4</h5>
                            <p className="card-text">Name your bot and agree to the Terms of Service. Click "Create". </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={botTab} width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Step #5</h5>
                            <p className="card-text">Go to the "Bot" menu and generate a token using "Add Bot". Make
                            sure 'Public Bot' is checked for others to invite your bot.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src="https://i.imgur.com/0dG2g3t.png" width="600px" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Step #6</h5>
                            <p className="card-text">Copy the bot token and paste it in the provided code. Please keep
                                in mind that your bot token should not be shared with others. Sharing your bot token
                                enables someone to use it as their own.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;