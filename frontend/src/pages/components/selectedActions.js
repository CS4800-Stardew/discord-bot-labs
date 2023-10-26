import React from "react";

const ReplyToSlashChannel = () => {
    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">Message Content</label>
            <input className="form-control mb-3" type="text" id="reply" placeholder="Start typing..."/>
            <label className="form-label float-start">Command reply is private?</label>
            <select className="select picker form-control mb-3"
                id="privateAction"
                required>
                <option defaultValue>Select</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select>
        </div>
    );
};

const SendChannelMessage = () => {
    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">Channel</label>
            <select className="select picker form-control mb-3"
                    id="privateAction"
                    required>
                <option defaultValue>Select Channel...</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select>
            <label className="form-label float-start">Message Content</label>
            <input className="form-control mb-3" type="text" id="reply" placeholder="Start typing..."/>
        </div>
    );
};

const SendDirectMessage = () => {
    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">User</label>
            <select className="select picker form-control mb-3"
                    id="selectUser"
                    required>
                <option defaultValue>Select User...</option>
                <option value="1">User that ran the Slash Command</option>
                <option value="2">Use ""</option>
            </select>
            <label className="form-label float-start">Message Content</label>
            <input className="form-control mb-3" type="text" id="reply" placeholder="Start typing..."/>
        </div>
    )
}

const AddRole = () => {
    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">User</label>
            <select className="select picker form-control mb-3"
                    id="selectUser"
                    required>
                <option defaultValue>Select User...</option>
                <option value="1">User that ran the Slash Command</option>
                <option value="2">Use ""</option>
            </select>
            <label className="form-label float-start">Role</label>
            <select className="select picker form-control mb-3"
                    id="addRole"
                    required>
                <option defaultValue>Select Role...</option>
                <option value="1">[this is where the roles of someone's bot is displayed??]</option>
            </select>
        </div>
    )
}

const RemoveRole = () => {
    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">User</label>
            <select className="select picker form-control mb-3"
                    id="selectUser"
                    required>
                <option defaultValue>Select User...</option>
                <option value="1">User that ran the Slash Command</option>
                <option value="2">Use ""</option>
            </select>
            <label className="form-label float-start">Role</label>
            <select className="select picker form-control mb-3"
                    id="removeRole"
                    required>
                <option defaultValue>Select Role...</option>
                <option value="1">[this is where the roles of someone's bot is displayed??]</option>
            </select>
        </div>
    )
}

const Kick = () => {
    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">Member</label>
            <select className="select picker form-control mb-3"
                    id="selectUser"
                    required>
                <option defaultValue>Select User...</option>
                <option value="1">User that ran the Slash Command</option>
                <option value="2">Use ""</option>
            </select>
            <label className="form-label float-start">Reason for Kicking</label>
            <input className="form-control mb-3" type="text" id="reply" placeholder="Start typing..."/>
        </div>
    )
}

export {ReplyToSlashChannel, SendChannelMessage, SendDirectMessage, AddRole, RemoveRole, Kick}