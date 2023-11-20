//generic input field but with a span prefix

import React from "react";

const SpanInput = ({ name, label, placeholder, error, ...rest }) => {
  // destructure props object
  return (
    <div className="input-group form-spacing">
      <span className="input-group-text" id="addon-wrapping">
        {label}
      </span>
      <input
        {...rest} // set additional input properties like 'value', 'onChange', etc.
        name={name}
        id={name}
        className="form-control"
        placeholder={placeholder}
        aria-label="Description"
        aria-describedby="addon-wrapping"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SpanInput;
