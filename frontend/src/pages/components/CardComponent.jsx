import React from "react";
import { Article } from "@mui/icons-material";
import ButtonComponent from "./ButtonComponent";

function CardComponent({ image, description, to }) {
  return (
    <div className="card-container">
      <img src={image} alt="Card Image" className="card-image" />
      <p className="card-description">{description}</p>
      <ButtonComponent label="Click Here" to={to} icon={<Article />} />
    </div>
  );
}
export default CardComponent;
