import React from "react";
import { Article } from "@mui/icons-material";
import ButtonComponent from "./ButtonComponent";

function CardComponent({ image, description, to }) {
  return (
    <div style={{ marginBottom: "75px", background: "#7289DA" }}>
      <img
        src={image}
        alt="Card Image"
        style={{ width: "100%", maxWidth: "300px" }}
      />
      <p style={{ marginTop: "30px", color: "white" }}>{description}</p>
      <ButtonComponent label="Click Here" to={to} icon={<Article />} />
    </div>
  );
}
export default CardComponent;
