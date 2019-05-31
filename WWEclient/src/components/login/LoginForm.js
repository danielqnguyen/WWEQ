import React from 'react';
import TextInput from '../common/TextInput';

const LoginForm = props => {
  return (
    <div className="container-fluid flex-grow-1 container-p-y">
      <div className="card col-md-6 offset-md-3 p2" style={{ borderRadius: "30px" }}>
        <article className="card-body">
          <h4 className="card-title">Login</h4>
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
              style={{ borderRadius: "40px" }}
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
              style={{ borderRadius: "40px" }}
            />
            <div style={{ textAlign: "center" }}>
              <a className="small" href="/register">Register</a>
            </div>
            <br />
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-success btn-block"
                    style={{ borderRadius: "60px" }}
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

export default LoginForm;