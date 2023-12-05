import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Accordion from "react-bootstrap/Accordion";

import SlashCommand from "./slashCommand";
import SendChannelMessage from "./sendChannelMessage"
import SendDirectMessage from "./sendDirectMessage"
import AddRole from "./addRole"
import RemoveRole from "./removeRole"
import DeleteMessage from "./deleteMessage"
import TopBar from "./topBar";
import Popup from "./common/popup";
import ReplyToSlashCommand from "./replyToSlashChannel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const BotForm = ({ cmd, setCmd, guildId, removeCommand }) => {
  const [actionPopup, setActionPopup] = useState(false);

  const actions = [
    {
      effect: "Reply to Slash Command",
      description:
        "Reply directly to a slash command, Only use this with slash commands",
    },
    {
      effect: "Send Channel Message",
      description: "Send message in channel",
    },
    {
      effect: "Send Direct Message",
      description: "Send direct message to user",
    },
    {
      effect: "Add Role",
      description: "Add role to server member",
    },
    {
      effect: "Remove Role",
      description: "Remove a role from a server member",
    },
    {
      effect: "Delete Message",
      description: "Delete a message",
    },
  ];

  const handleActionSelect = (effect) => {
    let updatedActions = [...cmd.actions];
    switch (effect) {
      case "Reply to Slash Command":
        const actionData = {
          effect: effect,
          message: "",
          privateReply: false,
        };
        updatedActions.push(actionData);
        break;
      case "Send Channel Message":
        const channelMsg = {
          effect: effect,
          message: "",
          channelSelected: "#channel"
        };
        updatedActions.push(channelMsg);
        break;
      case "Send Direct Message":
        const directMsg = {
          effect: effect,
          user: "",
          message: "",
        }
        updatedActions.push(directMsg);
        break;
      case "Add Role":
        const addRole = {
          effect: effect,
          member: "",
          role: "Role 1",
        }
        updatedActions.push(addRole);
        break;
      case "Remove Role":
        const removeRole = {
          effect: effect,
          member: "",
          role: "Role 1",
        }
        updatedActions.push(removeRole);
        break;
      case "Delete Message":
        const deleteMsg = {
          effect: effect,
          message: "",
        }
        updatedActions.push(deleteMsg);
        break;
      default:
        return;
    }

    setCmd((prevCmd) => ({
      ...prevCmd,
      actions: updatedActions,
    }));
    setActionPopup(false); // Close the popup after selection if needed
  };

  const handleCmdDataChange = (updatedData) => {
    if (cmd.id === updatedData.id) {
      setCmd(updatedData);
      //console.log("Updated data:", cmd);
    }
  };

  const handleActionDataChange = (id, updatedData, index) => {
    if (cmd.id === id) {
      let updatedActions = [...cmd.actions];
      updatedActions[index] = updatedData;
      setCmd((prevCmd) => ({
        ...prevCmd,
        actions: updatedActions,
      }));
      //console.log("Updated actions:", updatedActions);
    }
  };

  const handleExport = async () => {
    try {
      const response = await fetch('export');
      const data = await response.text();

      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // This will trigger whenever `cmd` changes
    console.log("Updated Data:", cmd); // This will show the updated state
    // Any other actions you want to perform after state update
  }, [cmd]);

  return (
    <div className="form-container p-4">
      <TopBar
        cmd={cmd}
        onDataChange={handleCmdDataChange}
        guildId={guildId}
        removeCommand={removeCommand}
      />
      <Accordion className="accordion" defaultActiveKey={["9999"]}>
        <SlashCommand cmd={cmd} onDataChange={handleCmdDataChange} />
        <FontAwesomeIcon className="flow-arrow" icon={faArrowDown} size="2xl" />
        {cmd.actions.map((action, index) => {
          switch (action.effect) {
            case "Reply to Slash Command":
              return (
                <ReplyToSlashCommand
                  key={index}
                  action={action}
                  cmdId={cmd.id}
                  index={index}
                  onDataChange={handleActionDataChange}
                />
              );
            case "Send Channel Message":
              return (
                <SendChannelMessage
                  key={index}
                  action={action}
                  cmdId={cmd.id}
                  index={index}
                  onDataChange={handleActionDataChange}
                />
              );
            case "Send Direct Message":
              return (
                <SendDirectMessage
                  key={index}
                  action={action}
                  cmdId={cmd.id}
                  index={index}
                  onDataChange={handleActionDataChange}
                />
              );
            case "Add Role":
              return (
                <AddRole
                  key={index}
                  action={action}
                  cmdId={cmd.id}
                  index={index}
                  onDataChange={handleActionDataChange}
                />
              );
            case "Remove Role":
              return (
                <RemoveRole
                  key={index}
                  action={action}
                  cmdId={cmd.id}
                  index={index}
                  onDataChange={handleActionDataChange}
                />
              );
            case "Delete Message":
              return (
                <DeleteMessage
                  key={index}
                  action={action}
                  cmdId={cmd.id}
                  index={index}
                  onDataChange={handleActionDataChange}
                />
              );
              // Add more cases for other actions
            default:
              return null; // Render nothing if action doesn't match
          }
        })}
      </Accordion>
      <button
        type="button"
        id="button"
        className="btn btn-info mb-3 mx-3"
        onClick={() => setActionPopup(true)}
      >
        Add Action
      </button>
      <button
          type="button"
          id="button"
          className="btn btn-info mb-3"
          onClick={handleExport}
      >
        Export
      </button>
      <Popup trigger={actionPopup} setTrigger={setActionPopup}>
        <h2 className="popup-list-title">Select From Available Actions</h2>
        <div className="list-container">
          {actions.map((action) => (
            <div className="list-item-wrapper" key={action.effect}>
              <button
                className="use-popup-btn"
                onClick={() => handleActionSelect(action.effect)}
              >
                <FontAwesomeIcon icon={faPlus} />
                Use Action
              </button>
              <div className="action-info-wrapper">
                <p className="action-effect popup-info">{action.effect}</p>
                <p className="action-desc popup-info">{action.description}</p>
              </div>
            </div>
          ))}
          ;
        </div>{" "}
      </Popup>
    </div>
  );
};

export default BotForm;
