import React from "react";
import { QuizSharp } from "@mui/icons-material";
import ButtonComponent from "./ButtonComponent";

function CardArray() {
    //holds card data
    const cards = [
      {
        title: "Get Started for Free",
        description: [
          "Without an Account, you can do the following:",
          "Create a Discord Bot.",
          "Instantly Deploy in Your Server.",
        ],
        //imageUrl: '',
        link: "/bot-builder",
      },
      // Delete this card if we don't have time to create a community page, or replace with an "about" section
      {
        title: "Community",
        description: ["Under Construction"],
        //imageUrl: '',
        //link: '',
      },
      {
        title: "Register for an Account",
        description: [
          "With an Account, you can do the following:",
          "Create a Discord Bot.",
          "Instantly Deploy in Your Server.",
          "Quickly Save/Edit Your Bots.",
          "View Them in our Custom Dashboard.",
        ],
        //imageUrl: '',
        link: "/register",
      },
    ];
  
    //displays card data
    //look into how to make buttons at uniform height?
    return (
      <div style={{ backgroundColor: "#7289DA", padding: "40px" }}>
        <h2 style={{ textAlign: "center", color: "white" }}>
          Learn More About Our Service
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className="card-container">
              <h3 className="card-title">{card.title}</h3>
              {card.description.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {itemIndex === 0 ? (
                    <p className="card-description">{item}</p>
                  ) : (
                    <li className="card-description">{item}</li>
                  )}
                </React.Fragment>
              ))}
              <ButtonComponent
                label="Learn More"
                to={card.link}
                icon={<QuizSharp />}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

export default CardArray;