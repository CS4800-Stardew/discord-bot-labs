import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Sidebar from "./components/sidebar";
import Popup from "./components/common/popup";

const BotBuilder = () => {
  const [triggerPopup, setTriggerPopup] = useState(false);
  const [commands, setCommands] = useState([]);

  return (
    <div>
      <div className="wrapper container-fluid no-padding">
        <Sidebar
          commands={commands}
          openTriggerPopup={() => setTriggerPopup(true)}
        />
        <h1>This is temp</h1>
        <Popup trigger={triggerPopup} setTrigger={setTriggerPopup}>
          <h2>Select From Available Triggers</h2>
        </Popup>
      </div>
    </div>
  );
};

export default BotBuilder;
