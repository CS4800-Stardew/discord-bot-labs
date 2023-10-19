import React from "react";

const ReplyToSlashChannel = () => {
    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">Message Content</label>
            <input className="form-control mb-3" type="text" id="reply" placeholder="Start typing..."/>
            <label className="form-label float-start">Command reply is private?</label>
            <select className="select picker form-control mb-3"
                type="select"
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
                    type="select"
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

export {ReplyToSlashChannel, SendChannelMessage}