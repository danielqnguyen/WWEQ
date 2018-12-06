import React from 'react';
import TextInputWithValidation from '../common/TextInputWithValidation';

const RegisterForm = props => {
  return (
    <React.Fragment>
      <div>
        <TextInputWithValidation
          name="email"
          label="email"
          type="email"
          value={props.email}
          placeholder="email@domain.com"
          onChange={props.onChange}
          isValid={props.emailValid}
          hintText="Please enter an email"
        />
        <TextInputWithValidation
          name="password"
          label="password"
          type="password"
          value={props.password}
          onChange={props.onChange}
          isValid={props.passwordValid}
          hintText="Please enter a password"
        />
        <TextInputWithValidation
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={props.confirmPassword}
          onChange={props.onChange}
          isValid={props.confirmPasswordValid}
          hintText="passwords do not match"
        />
        <button
          style={{ width: 283 }}
          type="button"
          className="btn btn-primary btn-block mt-4"
          onClick={props.onClick}
        >
          Sign Up
      </button>
      </div>
    </React.Fragment>
  );
}

export default RegisterForm;