import React, {useEffect, useState} from 'react';

let updatedCmdList = [];

function updatedCommand(updatedName, props) {
    let found = false;

    for (let i = 0 ; i < updatedCmdList.length; i++) {
        if (updatedCmdList[i].index === updatedName.index) {
            updatedCmdList[i] = {...updatedCmdList[i], ...updatedName};
            found = true;
            break;
        }
    }

    if (!found) {
        updatedCmdList.push(updatedName);
    }

    props.onNameChange(updatedCmdList);

    //console.log("this is the updatedDataList: ", updatedDataList);
}

function SlashCommand(props) {

    const [formData, setFormData] = useState({
        command: '',
        description: '',
    });

    useEffect(() => {
        // This effect runs whenever formData changes
        updatedCommand(formData, props);
    }, [formData, props]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form>
            <div className="input-group my-3 px-5">
                <span className="input-group-text" id="addon-wrapping">/</span>
                <input type="text"
                       value={formData.name}
                       onChange={handleInputChange}
                       name="command"
                       className="form-control"
                       aria-label="commandName"
                       placeholder="ex. ban"
                       required/>
            </div>

            <div className="input-group my-3 px-5">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text"
                       className="form-control"
                       name="description"
                       value={formData.description}
                       onChange={handleInputChange}
                       placeholder="Description of command"
                       aria-label="Description"
                       aria-describedby="addon-wrapping"/>
            </div>
            {/*
                <button type="button" className="btn btn-secondary mb-3"
                        onClick={() => this.setState({permissionForm: !this.state.permissionForm})}>
                    Permissions
                </button>
                <div id="collapseOne">
                    {this.state.permissionForm ? <Permission/> : null}
                </div> */}
        </form>
    );
};

export default SlashCommand