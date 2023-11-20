import React, { useEffect, useState } from "react";
import "./sidebar.css";

const Sidebar = ({
  title,
  buttonText,
  buttonEffect,
  items,
  onItemClick,
  prefix = "",
  tempName = "temp",
}) => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>{title}</h3>
      </div>
      <ul className="list-unstyled components">
        <button
          type="button"
          id="button"
          className="btn btn-info mb-3"
          onClick={buttonEffect}
        >
          {buttonText}
        </button>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href="#/"
              onClick={() => {
                onItemClick(item);
              }}
            >
              {prefix}
              {item.name ? item.name : tempName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
