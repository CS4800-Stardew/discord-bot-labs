// generic input field for forms

import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  // destructure props object
  return (
    <div className="form-group form-spacing">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        // set additional input properties like 'value', 'onChange', etc.
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
