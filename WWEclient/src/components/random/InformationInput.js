import React, { Component } from "react";

class InformationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "",
      location: "",
      price: "",
      cLocation: ""
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resp => {
        const current = resp.coords.latitude + " " + resp.coords.longitude;
        this.setState({ cLocation: current });
      }, this.geoError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  geoError() {
    alert("Cannot find location");
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val });
  };

  onClick = () => {
    if (this.state.food === "" && this.state.location === "") {
      this.props.history.push({
        pathname: "/random",
        food: "food",
        location: this.state.cLocation,
        price: this.state.price
      });
    } else if (this.state.food === "") {
      this.props.history.push({
        pathname: "/random",
        food: "food",
        location: this.state.location,
        price: this.state.price
      });
    } else if (this.state.location === "") {
      this.props.history.push({
        pathname: "/random",
        food: this.state.food,
        location: this.state.cLocation,
        price: this.state.price
      });
    } else {
      this.props.history.push({
        pathname: "/random",
        food: this.state.food,
        location: this.state.location,
        price: this.state.price
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center align-items-center">
          <h2>
            <label
              className="form-label"
              htmlFor="Location"
              style={{ color: "white" }}
            >
              WWEQ
            </label>
          </h2>
        </div>
        <div className="d-flex justify-content-center container">
          <input
            type="text"
            className="form-control"
            placeholder="Food"
            name="food"
            onChange={this.onChange}
            value={this.state.food}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            name="location"
            onChange={this.onChange}
            value={this.state.location}
          />
          <select
            name="price"
            onChange={this.onChange}
            style={{ borderRadius: "5px" }}
          >
            <option value="null">$</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button
            className="btn btn-success"
            type="button"
            onClick={this.onClick}
          >
            Search
          </button>
        </div>
        <div
          className="container"
          style={{ width: "450px", height: "350px", color: "white" }}
          //create own class to handle styling for media/desktop
        >
          {/* need to fix styling */}
          <h2>
            <center>Two options</center>
          </h2>
          <p>
            1. Just Press Search and it will search for food in your current
            location <br />
            *currently does not work on mobile*
          </p>
          <p />
          <p>2. Fill out the information as you feel fit</p>
          <p>Price Ranges: $(all), 1(~$10), 2($11-$30), 3($31-$60), 4($61+)</p>
        </div>
      </React.Fragment>
    );
  }
}

export default InformationInput;
