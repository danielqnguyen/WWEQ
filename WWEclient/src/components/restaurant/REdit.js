import React, { Component } from 'react';
import RegisterFoodForm from '../users/RegisterFoodForm'
import UsersServices from '../users/UsersService'

class REdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      categories: '',
      phone: '',
      hours: '',
      website: '',
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

  componentDidMount() {
    let tId = this.props.match.params.id
    UsersServices.crudById(tId, this.onGetSuccess, this.onError)
  }

  onGetSuccess = resp => this.setState({
    id: resp.data.Item.Id,
    name: resp.data.Item.Name,
    categories: resp.data.Item.Categories,
    phone: resp.data.Item.Phone,
    hours: resp.data.Item.Hours,
    website: resp.data.Item.Website,
    address1: resp.data.Item.Address1,
    address2: resp.data.Item.Address2,
    city: resp.data.Item.City,
    state: resp.data.Item.State,
    zip: resp.data.Item.Zip,
    range: resp.data.Item.Range,
    rating: resp.data.Item.Rating,
    delivery: resp.data.Item.Delivery,
    formValid: true,
    nameValid: true,
    categoriesValid: true,
    address1Valid: true,
    cityValid: true,
    stateValid: true,
    zipValid: true,
  })

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
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
    let stateValid = this.state.stateValid;
    let zipValid = this.state.zipValid

    switch (fieldName) {
      case "name":
        nameValid = value.length > 1;
        fieldValidationError.name = nameValid;
        break;
      case "categories":
        categoriesValid = value.length > 1;
        fieldValidationError.categories = categoriesValid;
        break;
      case "address1":
        address1Valid = value.length > 1;
        fieldValidationError.address1 = address1Valid;
        break;
      case "city":
        cityValid = value.length > 1;
        fieldValidationError.city = cityValid;
        break;
      case "state":
        stateValid = value.length > 1;
        fieldValidationError.state = stateValid;
        break;
      case "zip":
        zipValid = value.length > 4;
        fieldValidationError.zip = zipValid;
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

  onClick = () => this.state.formValid ? UsersServices.crudUpdate(this.state.id, this.state, this.onSuccess, this.onError) : this.setState({ showErrors: true })

  onSuccess = () => this.props.history.push({
    pathname: "/rprofile",
    id: this.state.id
  })

  onError = response => console.error(response)

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid flex-grow-1 container-p-y">
          <div className="card mb-4 col-md-6 offset-md-3">
            <h2>Restaurant</h2>
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
                website={this.state.website}
                phone={this.state.phone}
                hours={this.state.hours}
                address2={this.state.address2}
                range={this.state.range}
                rating={this.state.rating}
                delivery={this.state.delivery}
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

export default REdit