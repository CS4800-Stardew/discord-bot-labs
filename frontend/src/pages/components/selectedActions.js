import React, {useState} from "react";

let updatedDataList = [];

function updatedActionData(type, updatedData, props) {
    let found = false;

    for (let i = 0 ; i < updatedDataList.length; i++) {
        if (updatedDataList[i].type === type) {
            updatedDataList[i] = {...updatedDataList[i], ...updatedData};
            found = true;
            break;
        }
    }

    if (!found) {
        updatedDataList.push(updatedData);
    }

    props.listOfAction(updatedDataList);

    //console.log("this is the updatedDataList: ", updatedDataList);
}

function ReplyToSlashCommand(props) {
    const [replyVal, setReplyVal] = useState({
        type: '1',
        response: '',
        privVal: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReplyVal(prevState => ({
            ...prevState,
            [name]: value,
        }));

        updatedActionData('1', {...replyVal, [name]: value}, props);
    }

    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">Message Content</label>
            <input className="form-control mb-3" type="text"
                   name="response"
                   value={replyVal.response}
                   placeholder="Start typing..."
                   onChange={handleInputChange} required/>
            <label className="form-label float-start">Command reply is private?</label>
            <select className="select picker form-control mb-3"
                    name="privVal"
                    onChange={handleInputChange}
                    required>
                <option defaultValue>Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
    );
}

function SendChannelMessage(props) {
    const [channelVal, setChannelVal] = useState({
        type: '2',
        channel: '',
        channelMsg: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChannelVal(prevState => ({
            ...prevState,
            [name]: value,
        }));

        updatedActionData('2', {...channelVal, [name]: value}, props);
    }

    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">Channel</label>
            <select className="select picker form-control mb-3"
                    value={channelVal.channel}
                    name="channel"
                    onChange={handleInputChange}
                    required>
                <option defaultValue>Select Channel...</option>
                <option value="channel1 in server">Yes</option>
                <option value="channel2 in server">No</option>
            </select>
            <label className="form-label float-start">Message Content</label>
            <input className="form-control mb-3" type="text"
                   name="channelMsg"
                   value={channelVal.channelMsg}
                   placeholder="Start typing..."
                   onChange={handleInputChange}/>
        </div>
    );
};

function SendDirectMessage(props) {
    const [dmVal, setDmVal] = useState({
        type: '3',
        user: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDmVal(prevState => ({
            ...prevState,
            [name]: value,
        }));

        updatedActionData('3', {...dmVal, [name]: value}, props);
    }

    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">User</label>
            <select className="select picker form-control mb-3"
                    name="user"
                    value={dmVal.user}
                    onChange={handleInputChange}
                    required>
                <option defaultValue>Select User...</option>
                <option value="user that ran command">User that ran the Slash Command</option>
                <option value="input user's name">Use ""</option>
            </select>
            <label className="form-label float-start">Message Content</label>
            <input className="form-control mb-3"
                   type="text"
                   name="message"
                   value={dmVal.message}
                   onChange={handleInputChange}
                   placeholder="Start typing..."/>
        </div>
    )
}

function AddRole(props) {
    const [addRoleVal, setAddRoleVal] = useState({
        type: '4',
        user: '',
        roleAdded: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddRoleVal(prevState => ({
            ...prevState,
            [name]: value,
        }));

        updatedActionData('4', {...addRoleVal, [name]: value}, props);
    }

    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">User</label>
            <select className="select picker form-control mb-3"
                    name="user"
                    value={addRoleVal.user}
                    onChange={handleInputChange}
                    required>
                <option defaultValue>Select User...</option>
                <option value="user that ran command">User that ran the Slash Command</option>
                <option value="input user's name">Use ""</option>
            </select>
            <label className="form-label float-start">Role</label>
            <select className="select picker form-control mb-3"
                    name="roleAdded"
                    value={addRoleVal.roleAdded}
                    onChange={handleInputChange}
                    required>
                <option defaultValue>Select Role...</option>
                <option value="role available in server">[this is where the roles of someone's bot is displayed??]</option>
            </select>
        </div>
    )
}

function RemoveRole(props) {
    const [removeVal, setRemoveVal] = useState({
        type: '5',
        user: '',
        roleRemoved: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRemoveVal(prevState => ({
            ...prevState,
            [name]: value,
        }));

        updatedActionData('5', {...removeVal, [name]: value}, props);
    }

    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">User</label>
            <select className="select picker form-control mb-3"
                    name="user"
                    value={removeVal.user}
                    onChange={handleInputChange}
                    required>
                <option defaultValue>Select User...</option>
                <option value="user that ran command">User that ran the Slash Command</option>
                <option value="input user's name">Use ""</option>
            </select>
            <label className="form-label float-start">Role</label>
            <select className="select picker form-control mb-3"
                    name="roleRemoved"
                    value={removeVal.roleRemoved}
                    onChange={handleInputChange}
                    required>
                <option defaultValue>Select Role...</option>
                <option value="role available in channel">[this is where the roles of someone's bot is displayed??]</option>
            </select>
        </div>
    )
}

function Kick(props) {
    const [kickVal, setKickVal] = useState({
        type: '6',
        member: '',
        reason: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setKickVal(prevState => ({
            ...prevState,
            [name]: value,
        }));

        updatedActionData('6', {...kickVal, [name]: value}, props);
    }

    return (
        <div className="form-control my-4">
            <label className="form-label float-start mt-2">Member</label>
            <select className="select picker form-control mb-3"
                    name="member"
                    value={kickVal.member}
                    onChange={handleInputChange}
                    required>
                <option defaultValue>Select User...</option>
                <option value="user name">User available in server to Kick</option>
            </select>
            <label className="form-label float-start">Reason for Kicking</label>
            <input className="form-control mb-3"
                   type="text"
                   name="reason"
                   value={kickVal.reason}
                   onChange={handleInputChange}
                   placeholder="Start typing..."/>
        </div>
    )
}

export {ReplyToSlashCommand, SendChannelMessage, SendDirectMessage, AddRole, RemoveRole, Kick}