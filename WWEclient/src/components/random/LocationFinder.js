import React, { Component } from 'react';

class LocationFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val });
  }

  onClick = () => {
    this.state.location === ''
      ? this.props.history.push({ pathname: '/random', location: 'irvine' })
      : this.props.history.push({ pathname: '/random', location: this.state.location });
  }

  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center align-items-center">
          <h2><label className="form-label" htmlFor="Location" style={{ color: "Lime" }}>Location</label></h2>
        </div>
        <br />
        <div className="d-flex justify-content-center w3-container">
          <input type="text" className="form-control" placeholder="Irvine" name="location" onChange={this.onChange} value={this.state.location} />
          <div className="input-group-append">
            <button className="btn btn-success" type="button" onClick={this.onClick}>Search</button>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default LocationFinder;