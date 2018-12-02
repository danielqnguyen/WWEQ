import React, { Component } from 'react';
import RegisterFoodForm from './RegisterFoodForm'
import UsersServices from './UsersService'



class RegisterFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      categories: '',
      phone: '',
      hours: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      range: '',
      rating: '',
      delivery: '',
      formErrors: {
        name: '',
        categories: '',
        address1: '',
        city: '',
        state: '',
        zip: ''
      },
      nameValid: false,
      categoriesValid: false,
      address1Valid: false,
      cityValid: false,
      stateValid: false,
      zipValid: false,
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
    let nameValid = this.state.nameValid;
    let categoriesValid = this.state.categoriesValid;
    let address1Valid = this.state.address1Valid;
    let cityValid = this.state.cityValid;
    let stateValid = this.state.passwordValid;
    let zipValid = this.state.zipValid

    switch (fieldName) {
      case "name":
        nameValid = value.length > 1;
        fieldValidationError.email = nameValid;
        break;
      case "categories":
        categoriesValid = value.length > 1;
        fieldValidationError.password = categoriesValid;
        break;
      case "address1":
        address1Valid = value.length > 1;
        fieldValidationError.confirmPassword = address1Valid;
        break;
      case "city":
        cityValid = value.length > 1;
        fieldValidationError.confirmPassword = cityValid;
        break;
      case "state":
        stateValid = value.length > 1;
        fieldValidationError.confirmPassword = stateValid;
        break;
      case "zip":
        zipValid = value.length > 4;
        fieldValidationError.confirmPassword = zipValid;
        break;
      default:
        break;

    }
    this.setState(
      {
        formErrors: fieldValidationError,
        nameValid: nameValid,
        categoriesValid: categoriesValid,
        address1Valid: address1Valid,
        cityValid: cityValid,
        stateValid: stateValid,
        zipValid: zipValid
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.categoriesValid &&
        this.state.address1Valid &&
        this.state.cityValid &&
        this.state.stateValid &&
        this.state.zipValid
    })
  }

  onClick = () => {
    console.log(this.state)
    // this.state.formValid ? UsersServices.crudRegister(this.state, this.onSuccess, this.onError) : this.setState({ showErrors: true })
  }

  onSuccess = response => console.log(response)

  onError = response => console.log(response)

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid flex-grow-1 container-p-y">
          <div className="card mb-4 col-md-6 offset-md-3">
            <h2>Resturant</h2>
            <div className="card-body">
              <RegisterFoodForm
                name={this.state.name}
                nameValid={this.state.nameValid || !this.state.showErrors}
                categories={this.state.categories}
                categoriesValid={this.state.categoriesValid || !this.state.showErrors}
                address1={this.state.address1}
                address1Valid={this.state.address1Valid || !this.state.showErrors}
                city={this.state.city}
                cityValid={this.state.cityValid || !this.state.showErrors}
                state={this.state.state}
                stateValid={this.state.stateValid || !this.state.showErrors}
                zip={this.state.zip}
                zipValid={this.state.zipValid || !this.state.showErrors}
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

export default RegisterFood