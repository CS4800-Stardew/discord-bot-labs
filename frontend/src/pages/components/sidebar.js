import React, { useEffect, useState } from "react";

const Sidebar = ({ commands, openTriggerPopup, showCommand }) => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Commands</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <button
            type="button"
            id="addCommand"
            className="btn btn-info mb-3"
            onClick={openTriggerPopup}
          >
            New Command
          </button>
          {/* {commands.map((formNumber) => (
            <li key={formNumber}>
              <a
                href="#/"
                onClick={() => {
                  showCommand(formNumber);
                }}
              >
                {" "}
                {formNumber}
              </a>
            </li>
          ))} */}
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
