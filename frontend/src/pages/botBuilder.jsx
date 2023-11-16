import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the v4 uuid method
import "bootstrap/dist/css/bootstrap.css";

import Sidebar from "./components/common/sidebar";
import Popup from "./components/common/popup";
import TriggerList from "./components/triggerList";

const BotBuilder = () => {
  const [triggerPopup, setTriggerPopup] = useState(false);
  const [cmds, setCmds] = useState([]);
  const [activeCmd, setActiveCmd] = useState({});

  const handleTriggerSelect = (effect) => {
    setTriggerPopup(false); // Close the popup after selection if needed
    const cmdData = {
      trigger: effect,
      id: uuidv4(),
      name: "",
      description: "",
      actions: [],
    };
    setCmds([...cmds, cmdData]);
  };

  return (
    <div>
      <div className="wrapper container-fluid no-padding">
        <Sidebar
          title={"Commands"}
          buttonText={"New Command"}
          buttonEffect={() => setTriggerPopup(true)}
          items={cmds}
          onItemClick={setActiveCmd}
          prefix="/"
          tempName=""
        />
        <h1>This is temp</h1>
        <Popup trigger={triggerPopup} setTrigger={setTriggerPopup}>
          <h2 className="trigger-list-title">Select From Available Triggers</h2>
          <TriggerList onTriggerSelect={handleTriggerSelect} />
        </Popup>
      </div>
    </div>
  );
};

export default BotBuilder;
