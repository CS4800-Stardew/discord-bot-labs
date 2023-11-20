import React from "react";

const Dropdown = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group form-spacing">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
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

export default Dropdown;
