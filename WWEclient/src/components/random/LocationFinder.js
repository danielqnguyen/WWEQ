import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../redux/Action'

class LocationFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
      location: ''
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resp => {
        const current = (resp.coords.latitude + " " + resp.coords.longitude)
        this.props.getUserLocation(current)
      }, this.geoError)
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  geoError() {
    alert("Geocoder failed.");
  }

  onChange = evt => {
    console.log(evt)
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val });
    console.log(this.state)
  }

  onClick = () => {
    console.log(this.props.location)
    if (this.state.food === '' && this.state.location === '') {
      this.props.history.push({ pathname: '/random', food: 'food', location: this.props.location.location })
    } else if (this.state.food === '') {
      this.props.history.push({ pathname: '/random', food: 'food', location: this.state.location })
    } else if (this.state.location === '') {
      this.props.history.push({ pathname: '/random', food: this.state.food, location: this.props.location.location })
    } else {
      this.props.history.push({ pathname: '/random', food: this.state.food, location: this.state.location })
    }
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <div className="d-flex justify-content-center align-items-center">
          <h2><label className="form-label" htmlFor="Location" style={{ color: "Green" }}>WWEQ</label></h2>
        </div>
        <br />
        <div className="d-flex justify-content-center container">
          <input type="text" className="form-control" placeholder="Food" name="food" onChange={this.onChange} value={this.state.food} />
          <input type="text" className="form-control" placeholder="Location" name="location" onChange={this.onChange} value={this.state.location} />
          <div className="input-group-append">
            <button className="btn btn-success" type="button" onClick={this.onClick}>Search</button>
          </div>
        </div>
      </React.Fragment >
    );
  };
}

const mapStateToProps = state => {
  return {
    location: state.Reducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserLocation: (location) => {
      console.log(location)
      dispatch(getLocation(location))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFinder);

