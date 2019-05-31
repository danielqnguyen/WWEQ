import React from "react";

const TextInput = props => {
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
        style={props.style}
      />
      <div className="invalid-feedback">{props.hintText}</div>
    </div>
  );
};

export default TextInput;
