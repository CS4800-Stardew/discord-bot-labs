// Switch component
import React from "react";

const Switch = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-check form-switch form-spacing">
      <input
        {...rest}
        type="checkbox"
        className="form-check-input"
        name={name}
        id={name}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Switch;
