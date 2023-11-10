import React from "react";
import ButtonComponent from "./ButtonComponent";

function GroupedTitleAndButton({
  header,
  title,
  subtitle,
  logo,
  buttonLabel,
  buttonTo,
  buttonIcon,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        background: "#7289DA",
        padding: "150px",
      }}
    >
      <div>
        <h1 style={{ marginBottom: "10px", color: "white" }}>{header}</h1>
        <h2 style={{ marginBottom: "40px", color: "white" }}>{title}</h2>
        <img
          src={logo}
          alt="Image"
          style={{ maxWidth: "300px", marginRight: "20px" }}
        />
        <h3 style={{ marginBottom: "40px", color: "white" }}>{subtitle}</h3>
        <ButtonComponent label={buttonLabel} to={buttonTo} icon={buttonIcon} />
      </div>
    </div>
  );
}

export default GroupedTitleAndButton;
