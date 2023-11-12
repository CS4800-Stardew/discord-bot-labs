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
    <div className="grouped-container">
      <div>
        <h1 className="header-text">{header}</h1>
        <h2 className="title-text">{title}</h2>
        <img src={logo} alt="Image" className="logo-image" />
        <h3 className="subtitle-text">{subtitle}</h3>
        <ButtonComponent label={buttonLabel} to={buttonTo} icon={buttonIcon} />
      </div>
    </div>
  );
}

export default GroupedTitleAndButton;
