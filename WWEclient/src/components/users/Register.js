import React, { Component } from 'react';
import RegisterForm from './RegisterForm'
import UsersServices from './UsersService'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      formErrors: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      formValid: false
    }
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    console.log(key, val)
    this.setState({ [key]: val },
      this.validateField(key, val)
    );
  }

  validateField = (fieldName, value) => {
    let fieldValidationError = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.state.confirmPasswordValid

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        fieldValidationError.email = emailValid;
        break;
      case "password":
        passwordValid = value.length > 5;
        fieldValidationError.password = passwordValid;
        break;
      case "confirmPassword":
        confirmPasswordValid = value = this.state.password
        fieldValidationError.confirmPassword = confirmPasswordValid;
        break;
      default:
        break;

    }
    this.setState(
      {
        formErrors: fieldValidationError,
        emailValid: emailValid,
        passwordValid: passwordValid,
        confirmPasswordValid: confirmPasswordValid
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.confirmPasswordValid
    })
  }

  onClick = () => {
    console.log(this.state)
    this.state.formValid ? UsersServices.register(this.state, this.onSuccess, this.onError) : this.setState({ showErrors: true })
  }

  onSuccess = response => console.log(response)

  onError = response => console.log(response)

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid flex-grow-1 container-p-y">
          <div className="card mb-4">
            <div className="card-body">
              <RegisterForm
                email={this.state.email}
                emailValid={this.state.emailValid || !this.state.showErrors}
                password={this.state.password}
                passwordValid={this.state.passwordValid || !this.state.showErrors}
                confirmPassword={this.state.confirmPassword}
                confirmPasswordValid={this.state.confirmPasswordValid || !this.state.showErrors}
                onChange={this.onChange}
                onClick={this.onClick}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Register