//generic input field but with a span prefix

import React from "react";

const SpanTextarea = ({ name, label, error, ...rest }) => {
  // destructure props object
  return (
    <div className="input-group form-spacing">
      <span className="input-group-text" id="addon-wrapping">
        {label}
      </span>
      <textarea
        {...rest} // set additional input properties like 'value', 'onChange', etc.
        name={name}
        id={name}
        className="form-control"
        aria-label="Description"
        aria-describedby="addon-wrapping"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SpanTextarea;
