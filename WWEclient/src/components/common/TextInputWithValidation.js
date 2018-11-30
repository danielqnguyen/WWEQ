import React from "react";

const TextInputValid = props => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={`form-control ${props.isValid ? "" : "is-invalid"}`}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <div className="invalid-feedback">{props.hintText}</div>
    </div>
  );
};

export default TextInputValid;
