import React from 'react';
import TextInput from './TextInput';

const RegistrationForm = props => {
  return (
    <div className="test">
      <div className="card container">
        <article className="card-body">
          <h4 className="card-title mb-4 mt-1">Registration</h4>
          <form>
            <TextInput
              name="email"
              label="Email:"
              type="email"
              value={props.email}
              placeholder=""
              onChange={props.onChange}
              isValid={props.emailValid}
              hintText="Please enter a valid email"
            />
            <TextInput
              name="password"
              label="Password:"
              type="password"
              value={props.password}
              placeholder=""
              onChange={props.onChange}
              isValid={props.passwordValid}
              hintText="Please enter a valid password"
            />
            <TextInput
              name="password"
              label="Password:"
              type="password"
              value={props.password}
              placeholder=""
              onChange={props.onChange}
              isValid={props.passwordValid}
              hintText="Please enter a valid password"
            />
            <div className="col-md-8 text-right">
              <a className="small" href="doesnotextist.com">Register</a>
            </div>
            <br />
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-success btn-block"
                    onClick={props.onClick}
                  > Login
                  </button>
                  <p style={{ textAlign: "center" }}><a href="doesnotexist.com">Forgot Password?</a></p>
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