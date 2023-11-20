import React from "react";

const SpanDropdown = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="input-group form-spacing">
      <span className="input-group-text" id="addon-wrapping">
        {label}
      </span>
      <select {...rest} name={name} id={name} className="form-control">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SpanDropdown;
