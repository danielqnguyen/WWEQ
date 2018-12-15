import React, { Component } from 'react';
import Select from 'react-select'

class LocationFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
      location: ''
    };
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val });
  }

  onClick = () => {
    if (this.state.food === '' && this.state.location === '') {
      this.props.history.push({ pathname: '/random', food: 'food', location: 'irvine' })
    } else if (this.state.food === '') {
      this.props.history.push({ pathname: '/random', food: 'food', location: this.state.location })
    } else if (this.state.location == - '') {
      this.props.history.push({ pathname: '/random', food: this.state.food, location: 'irvine' })
    } else {
      this.props.history.push({ pathname: '/random', food: this.state.food, location: this.state.location })
    }
  }

  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        borderBottom: '10px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 200,
      })
    }
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center align-items-center">
          {/* <h2><label className="form-label" htmlFor="Location" style={{ color: "Lime" }}>Location</label></h2> */}
        </div>
        <br />
        <div className="col-sm-4">
          {/* <input type="text" className="form-control" placeholder="Food" name="food" onChange={this.onChange} value={this.state.food} /> */}
          <Select options={options} />

          {/* <input type="text" className="form-control" placeholder="Location" name="location" onChange={this.onChange} value={this.state.location} /> */}
          <Select options={options} />

          <div className="input-group-append">
            <button className="btn btn-success" type="button" onClick={this.onClick}>Search</button>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default LocationFinder;