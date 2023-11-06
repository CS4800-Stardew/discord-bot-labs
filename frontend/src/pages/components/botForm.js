import React, {useEffect, useState} from 'react';
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

const cmdList = []
const finalActionList = []

const BotForm = ({forms, activeForm, removeCommand, jsonList}) => {
    const [fullActList, setFullActList] = useState([]);
    const [cmdName, setCmdName] = useState([]);

    const handleSlashCommand = (data, formNumber) => {
        //setCmdName(data)
        //jsonObject.Name = data[0]

        //console.log("this is the data:", data);
        //console.log("this is the formNumber:", formNumber);
        console.log("activeForm: ", activeForm)

        if (activeForm !== null) {
            jsonList[activeForm-1].Name = data;
        }

        console.log("jsonObject: ", jsonList)

    }

    function handleActionData(data, formNumber) {
        setFullActList(data)
        //jsonObject.Action = data

        //updateInFinalList(jsonObject)
       // console.log("this is the jsonObject.Action: ", jsonObject.Action)
    }

    return (
        <div className="form-container p-4">
            {forms.map(formNumber => (
                <div className="form" key={formNumber} id={`form${formNumber}`}
                    style={{ display: activeForm === formNumber ? 'block' : 'none', marginBottom: '20px' }}>
                    <h2> {formNumber}</h2>
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
                                <SlashCommand onNameChange={event => handleSlashCommand(event, formNumber)}/>
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
                                <AddAction onActionChange={handleActionData}/>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger me-3" onClick={() => removeCommand(formNumber)}>
                        Delete Command
                    </button>
                </div>
            ))}
        </div>
    );
};

export default BotForm;
