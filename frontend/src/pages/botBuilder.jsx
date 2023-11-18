import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the v4 uuid method
import "bootstrap/dist/css/bootstrap.css";

import Sidebar from "./components/common/sidebar";
import Popup from "./components/common/popup";
import TriggerList from "./components/triggerList";
import BotForm from "./components/botForm";

const BotBuilder = () => {
  const [triggerPopup, setTriggerPopup] = useState(false);
  const [cmds, setCmds] = useState([]);
  const [activeCmd, setActiveCmd] = useState(null);

  // handle selection of trigger and add it as new cmd
  const handleTriggerSelect = (effect) => {
    // Creating a new command object with trigger and default properties using uuid
    const cmdData = {
      trigger: effect,
      id: uuidv4(), // Generate a unique ID for the command
      name: "",
      description: "",
      actions: [],
      deploy: false,
      options: [1, 2, 3],
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
          <h2 className="trigger-list-title">Select From Available Triggers</h2>
          {/* Component for displaying available triggers */}
          <TriggerList onTriggerSelect={handleTriggerSelect} />
        </Popup>
      </div>
    </div>
  );
};

export default BotBuilder;
