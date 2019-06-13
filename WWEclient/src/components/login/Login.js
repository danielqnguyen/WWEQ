import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './Login.css'
import LoginService from './LoginService'

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
    }
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val }, () => {
      this.validateField(key, val);
    })
  }

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
    this.setState({
      formErrors: fieldValidationError,
      emailValid: emailValid,
      passwordValid: passwordValid,
    },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid
    })
  }

  onClick = () => this.state.formValid
    ? LoginService.loginUser(this.state.email, this.state.password, this.LoginSucc,
    alert('Please double check your email or password'))
    : this.setState({ showErrors: true });

    LoginSucc = () => this.props.history.push('/')

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
      </>
    );
  }
}

export default Login;