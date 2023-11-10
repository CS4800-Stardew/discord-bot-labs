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
    <Link to={to} style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={scrollToTop}
        startIcon={icon}
      >
        {label}
      </Button>
    </Link>
  );
}

export default ButtonComponent;
