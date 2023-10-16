import React, { useState } from 'react';
import {CommandForm} from "./commandForm";

const Sidebar = () => {
    const [forms, setForms] = useState([]);

    const addForm = () => {
        const newFormId = forms.length + 1;
        setForms([...forms, { id: newFormId, isOpen: true }]);
    };

    const handleFormRemove = (index) => {
        const list = [...forms];
        list.splice(index, 1);
        setForms(list);
    };

    const toggleForm = (formId) => {
        setForms(forms.map(form => form.id === formId ? { ...form, isOpen: !form.isOpen } : form));
    };

    const handleSubmit = (formId) => (e) => {
        e.preventDefault();
        // Handle form submission logic here for the specific formId
        // After form submission, you can hide the form by setting isOpen to false
        toggleForm(formId);
    };

    return (
        <div className="wrapper container-fluid no-padding">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Commands</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <button type="button" id="addCommand" className="btn btn-info" onClick={addForm}>
                            New Command
                        </button>
                    </li>
                </ul>
            </nav>
            <div class="form-container p-4">
                {forms.map(form => (
                    form.isOpen && (
                        <form key={form.id} onSubmit={handleSubmit(form.id)}>
                            <CommandForm>{form.id}</CommandForm>
                            <button type="remove" className="btn btn-danger me-3" name="add"
                                    onClick={() => handleFormRemove(form.id)}>
                                Remove
                            </button>
                            <button type="save" className="btn btn-secondary me-3">Save</button>
                            <button type="submit" className="btn btn-primary me-3">Submit</button>
                        </form>
                    )
                ))}
            </div>
        </div>
    );
};

export default Sidebar;