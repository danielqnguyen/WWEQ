import React from 'react';
import TextInput from '../common/TextInput';

const RegistrationForm = props => {
  return (
    <div className="container-fluid flex-grow-1 container-p-y">
      <div className="card col-md-6 offset-md-3 p2" style={{ borderRadius: "30px" }}>
        <article className="card-body">
          <h4 className="card-title">Registration</h4>
          <form>
            <TextInput
              name="email"
              label="Email"
              type="email"
              value={props.email}
              placeholder=""
              onChange={props.onChange}
              isValid={props.emailValid}
              hintText="Please enter a valid email"
              style={{ borderRadius: "40px" }}
            />
            <TextInput
              name="password"
              label="Password (must contain a special character, one digit and at least one uppercase)"
              type="password"
              value={props.password}
              placeholder=""
              onChange={props.onChange}
              isValid={props.passwordValid}
              hintText="Please enter a valid password"
              style={{ borderRadius: "40px" }}
            />
            <TextInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={props.confirmPassword}
              placeholder=""
              onChange={props.onChange}
              isValid={props.confirmPasswordValid}
              hintText="Please re-enter your password"
              style={{ borderRadius: "40px" }}
            />
            <br />
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-success btn-block"
                    style={{ borderRadius: "60px" }}
                    onClick={props.onClick}
                  > Register
                  </button>
                  <p style={{ textAlign: "center" }}><a href="/login">Already have an account?</a></p>
                </div>
              </div>
            </div>
          </form>
        </article>
      </div>
    </div>
  )
}

export default RegistrationForm;