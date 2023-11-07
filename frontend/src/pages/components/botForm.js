import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AddAction from "./addAction"; // Import Bootstrap JavaScript
import SlashCommand from "./slashCommand";

/*
const Permission = () => {
    return (
        <div className="input-group mb-3 px-5">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input type="text" className="form-control" placeholder="Option name" aria-label="Username"
                   aria-describedby="addon-wrapping"/>
        </div>
    );
}
 */

const BotForm = ({ cmdIds, activeCmd, removeCommand, jsonList }) => {
  const slashCommandRefs = [];

  const handleSlashCommand = (data, formNumber) => {
    console.log(cmdIds);
    console.log("this is the data:", data);
    if (formNumber !== null && formNumber === activeCmd) {
      jsonList[formNumber - 1].Name = data;
      console.log("jsonObject: ", JSON.parse(JSON.stringify(jsonList)));
      return jsonList;
    }
  };

  function getSlashRefs() {
    for (const scr of slashCommandRefs) {
      scr.reeeeeee();
    }
  }

  function handleActionData(data, formNumber) {
    console.log("this is the action data:", data);
    //setFullActList(data);
    //jsonObject.Action = data
    //updateInFinalList(jsonObject)
    // console.log("this is the jsonObject.Action: ", jsonObject.Action)
  }

  return (
    <div className="form-container p-4">
      {cmdIds.map((formNumber) => (
        <div
          className="form"
          key={formNumber}
          id={`form${formNumber}`}
          style={{
            display: activeCmd === formNumber ? "block" : "none",
            marginBottom: "20px",
          }}
        >
          <h2> {formNumber}</h2>
          <div className="accordion" id="accordionCommand">
            <div className="accordion-item mb-4">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1: Name
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionCommand"
              >
                <SlashCommand
                  ref={(ref) => (slashCommandRefs[formNumber - 1] = ref)}
                  onNameChange={(event) =>
                    handleSlashCommand(event, formNumber)
                  }
                />
                {/* <SlashCommand
                  onNameChange={(event) => {
                    if (formNumber === activeCmd) {
                      handleSlashCommand(event, formNumber);
                    }
                  }}
                /> */}
              </div>
            </div>

            <div className="accordion-item mb-4">
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
                <AddAction onActionChange={handleActionData} />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-danger me-3"
            onClick={() => removeCommand(formNumber)}
          >
            Delete Command
          </button>
        </div>
      ))}
    </div>
  );
};

export default BotForm;
