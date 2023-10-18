import 'bootstrap/dist/css/bootstrap.css'
import {Component, useState} from "react"
import CommandForm from "./components/commandForm";

function BotBuilder() {
    const [forms, setForms] = useState([]);
    const [highestCommandNum, setHighestCommandNum] = useState(0);
    const [activeForm, setActiveForm] = useState(null);

    const showCommand = formNumber => {
        setActiveForm(formNumber)
    }

    const addCommand = () => {
        const newCommandNum = highestCommandNum + 1;
        setForms(prevForms => [...prevForms, newCommandNum]);
        setHighestCommandNum(newCommandNum);
    };

    const removeCommand = formNumber => {
        if (forms.length > 0) {
            setForms(prevForms => prevForms.filter(form => form !== formNumber));
            setActiveForm(null);
        }
    };

    const updateCommandName = (formNumber, newName) => {
        const updatedCommands = forms.map(command => {
            if (command.number === formNumber) {
                return { ...command, name: newName };
            }
            return command;
        });
        setForms(updatedCommands);
    };

    return(
        //Div class for menu
        <div className="wrapper container-fluid no-padding">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Commands</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <button type="button" id="addCommand" className="btn btn-info mb-3" onClick={addCommand}>
                            New Command
                        </button>
                        {forms.map(formNumber => (
                            <li key="formNumber">
                                <a onClick={() => showCommand(formNumber)}>Command {formNumber}</a>
                            </li>
                        ))}
                    </li>
                </ul>
            </nav>
            <div className="form-container p-4">
                {forms.map(formNumber => (
                    <div className="form" key="formNumber" id={`form${formNumber}`}
                         style={{display: activeForm === formNumber ? 'block' : 'none', marginBottom: '20px'}}>
                        <h2>Command {formNumber}</h2>
                        <form>
                            <CommandForm/>
                            <button type="button" className="btn btn-danger me-3"
                                    onClick={() => removeCommand(formNumber)}>Delete Command
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BotBuilder;