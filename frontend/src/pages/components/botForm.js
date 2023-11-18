import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import AddAction from "./addAction"; // Import Bootstrap JavaScript
import SlashCommand from "./slashCommand";
import TopBar from "./topBar";

const BotForm = ({ cmd, setCmd }) => {
  const handleCmdDataChange = (updatedData) => {
    if (cmd.id === updatedData.id) {
      setCmd(updatedData);
      console.log("Updated data:", cmd);
    }
  };

  return (
    <div className="form-container p-4">
      <TopBar cmd={cmd} onDataChange={handleCmdDataChange} />
      <div className="accordion" id="accordionCommand">
        <SlashCommand cmd={cmd} onDataChange={handleCmdDataChange} />

        {/* <div className="accordion-item mb-4">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2: Action
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionCommand"
              >
                <AddAction onActionChange={(event) => handleActionData(event, formNumber)} />
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default BotForm;
