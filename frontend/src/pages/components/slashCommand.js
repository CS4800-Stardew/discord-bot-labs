import React, { useState } from 'react';

const SlashCommand = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API or perform other actions
        console.log('Form submitted with data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group my-3 px-5">
                <span className="input-group-text" id="addon-wrapping">/</span>
                <input type="text"
                       value={formData.name}
                       onChange={handleInputChange}
                       name = "name"
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