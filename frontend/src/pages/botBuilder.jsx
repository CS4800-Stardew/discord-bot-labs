import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the v4 uuid method
import "bootstrap/dist/css/bootstrap.css";
import "./botBuilder.css";

import Sidebar from "./components/common/sidebar";
import Popup from "./components/common/popup";
import BotForm from "./components/botForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const BotBuilder = () => {
  const [triggerPopup, setTriggerPopup] = useState(false);
  const [cmds, setCmds] = useState([]);
  const [activeCmd, setActiveCmd] = useState(null);

  const triggers = [
    {
      effect: "Custom Slash Command",
      description: "Create a custom slash command",
    },
    {
      effect: "User Joins Server",
      description: "Command runs when a user joins the server",
    },
    {
      effect: "User Leaves Server",
      description: "Command runs when a user leaves the server",
    },
    {
      effect: "New Channel Message",
      description: "Command runs when message is sent in a channel",
    },
    {
      effect: "Bad Word Message",
      description: "Command runs when message contains a bad word",
    },
  ];

  // handle selection of trigger and add it as new cmd
  const handleTriggerSelect = (effect) => {
    // Creating a new command object with trigger and default properties using uuid
    const cmdData = {
      trigger: effect,
      id: uuidv4(), // Generate a unique ID for the command
      name: "",
      description: "",
      variables: [],
      actions: [],
      deploy: false,
    };
    // Add the new command to the list of commands
    setCmds([...cmds, cmdData]);
    setTriggerPopup(false); // Close the popup after selection if needed
  };

  // update cmds when active command is modified
  useEffect(() => {
    if (activeCmd) {
      setCmds((cmds) =>
        cmds.map((cmd) => (cmd.id === activeCmd.id ? activeCmd : cmd))
      );
    }
  }, [activeCmd]); // triggered when activeCmd changes

  return (
    <div>
      <div className="wrapper container-fluid no-padding">
        {/* Sidebar for displaying commands */}
        <Sidebar
          title={"Commands"}
          buttonText={"New Command"}
          buttonEffect={() => setTriggerPopup(true)} // Open trigger selection popup
          items={cmds}
          onItemClick={setActiveCmd}
          prefix="/"
          tempName=""
        />
        {/* BotForm component to display and edit active command details */}
        {activeCmd && <BotForm cmd={activeCmd} setCmd={setActiveCmd} />}
        {/* Popup for selecting triggers */}
        <Popup trigger={triggerPopup} setTrigger={setTriggerPopup}>
          <h2 className="popup-list-title">Select From Available Triggers</h2>
          {/* Component for displaying available triggers */}
          <div className="list-container">
            {triggers.map((trigger) => (
              <div className="list-item-wrapper" key={trigger.effect}>
                <button
                  className="use-popup-btn"
                  onClick={() => handleTriggerSelect(trigger.effect)}
                >
                  <FontAwesomeIcon icon={faBolt} />
                  Use Trigger
                </button>
                <p className="trigger-effect popup-info">{trigger.effect}</p>
                <p className="trigger-desc popup-info">{trigger.description}</p>
              </div>
            ))}
            ;
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default BotBuilder;
