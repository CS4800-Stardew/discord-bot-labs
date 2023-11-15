import React, {useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const TriggerList = ({...rest}) => {
    const [triggers, setTriggers] = useState([
        {
            effect: "Custom slash command",
            description: "Create a custom slash command",
        },
        {
            effect: "User joins server",
            description: "Command runs when a user joins the server",
        },
        {
            effect: "User leaves server",
            description: "Command runs when a user leaves the server",
        },
        {
            effect: "New channel message",
            description: "Command runs when message is sent in a channel",
        },
        {
            effect: "bad word message",
            description: "Command runs when message contains a bad word",
        }
]);

    return (
        <div className="list-container">
            {triggers.map((trigger) => (
                <div className="list-item-wrapper">
                    <button className="use-trigger-btn" {...rest}>
                        <FontAwesomeIcon icon={faBolt} />
                        Use Trigger
                    </button>
                    <p className="trigger-effect trigger-info">{trigger.effect}</p>
                    <p className="trigger-desc trigger-info">{trigger.description}</p>
                </div>
            ))};
        </div>
    )
}

export default TriggerList;