// ButtonComponent.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function ButtonComponent({ label, to, icon }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link to={to} className="button-link">
      <Button
        variant="contained"
        color="primary"
        onClick={scrollToTop}
        startIcon={icon}
        className="custom-button"
      >
        {label}
      </Button>
    </Link>
  );
}

export default ButtonComponent;
