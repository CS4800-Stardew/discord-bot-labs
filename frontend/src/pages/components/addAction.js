import React, {useState} from "react";
import {ReplyToSlashChannel, SendChannelMessage} from "./selectedActions";

function AddAction() {
    const [actionList, setActionList] = useState([{ action: "" }]);

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...actionList];
        list[index][name] = value;
        setActionList(list);
    };

    const handleActionRemove = (index) => {
        const list = [...actionList];
        list.splice(index, 1);
        setActionList(list);
    };

    const handleAddAction = () => {
        setActionList([...actionList, { action: "" }]);
    };

    const renderContainer = (type) => {
        switch (type) {
            case "1":
                return <ReplyToSlashChannel />;
            case "2":
                return <SendChannelMessage />;
            // Add cases for other action types and corresponding components
            default:
                return null;
        }
    };

    return (
        <div className="form-field px-5">
            {actionList.map((singleService, index) => (
                <div key={index} className="actions btn-toolbar flex-row my-3" role="toolbar" >
                    {actionList.length !== 1 && (
                        <button
                            type="button"
                            onClick={() => handleActionRemove(index)}
                            className="remove-btn me-3 btn btn-danger">
                            Remove
                        </button>
                    )}
                    <select
                        className="select picker form-control w-75 me-3"
                        name="type"
                        type="select"
                        id="action"
                        value={singleService.type}
                        onChange={(e) => handleServiceChange(e, index)}
                        required>
                        <option defaultValue>Select an Action</option>
                        <option value="1">Reply to Slash Channel</option>
                        <option value="2">Send Channel Message</option>
                        <option value="3">Send Direct Message</option>
                        <option value="4">Add Role</option>
                        <option value="5">Remove Role</option>
                        <option value="6">Delete Message</option>
                        <option value="7">Kick</option>
                        <option value="8">Purge</option>
                        <option value="9">Ban</option>
                        <option value="10">Unban</option>
                    </select>
                    {actionList.length - 1 === index && actionList.length < 10 && (
                        <button
                            type="button"
                            onClick={handleAddAction}
                            className="add-btn btn btn-primary">
                            Add Action
                        </button>
                    )}

                    {renderContainer(singleService.type)}
                </div>
            ))}
        </div>
    );
}

export default AddAction