//generic in-page popup
//requires a trigger and setTrigger to be pased in

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-popup-button"
          onClick={() => props.setTrigger(false)}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
