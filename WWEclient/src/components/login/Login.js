import React, { Component } from "react";
import LoginForm from "./LoginForm";
import "./Login.css";
import { connect } from "react-redux";
import { loginUser } from "../../redux/Action";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: ""
      },
      emailValid: false,
      passwordValid: false
    };
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val }, () => {
      this.validateField(key, val);
    });
  };

  validateField = (fieldName, value) => {
    let fieldValidationError = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationError.email = emailValid;
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationError.password = passwordValid;
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationError,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  };

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  onClick = async () => {
    if (this.state.formValid) {
      this.props.loginUserRequest(this.state.email, this.state.password);
      setTimeout(() => this.props.history.push("/"), 2000);
    } else {
      this.setState({ showErrors: true });
    }
  };

  render() {
    return (
      <>
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          emailValid={this.state.emailValid || !this.state.showErrors}
          passwordValid={this.state.passwordValid || !this.state.showErrors}
          onChange={this.onChange}
          onClick={this.onClick}
        />
        <button onClick={() => console.log(sessionStorage)} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.Reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUserRequest: (userName, password) => {
      dispatch(loginUser(userName, password))
        .then(resp => {
          return resp;
        })
        .catch(err => {
          alert("Error: Invalid Username or Password");
          return err;
        });
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
