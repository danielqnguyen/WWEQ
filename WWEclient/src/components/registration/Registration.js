import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
import './Registration.css';
import RegistrationService from './RegistrationService';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      formErrors: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false
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
    let confirmPasswordValid = this.state.confirmPasswordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationError.email = emailValid;
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationError.password = passwordValid;
        break;
      case "confirmPassword":
        confirmPasswordValid = this.state.password;
        fieldValidationError.confirmPassword = confirmPasswordValid;
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationError,
      emailValid,
      passwordValid,
      confirmPasswordValid
    },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.confirmPasswordValid
    })
  }

  onClick = () => this.state.formValid
    ? RegistrationService.registerUser(this.state, response => {
      console.log(response)
    }, alert('Something went wrong please try again'))
    : console.log(this.state) || this.setState({ showErrors: true });

  render() {
    return (
      <>
        <RegistrationForm
          email={this.state.email}
          password={this.state.password}
          emailValid={this.state.emailValid || !this.state.showErrors}
          passwordValid={this.state.passwordValid || !this.state.showErrors}
          confirmPasswordValid={this.state.confirmPasswordValid || !this.state.showErrors}
          onChange={this.onChange}
          onClick={this.onClick}
        />
      </>
    );
  }
}

export default Registration;