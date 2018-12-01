import React, { Component } from 'react'
import Rating from 'react-rating'


class LocationFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      // value: 0
    }
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val })
    console.log(this.state)
  }

  onClick = () => {
    this.state.location === ''
      ? this.props.history.push({ pathname: '/random', location: 'irvine' })
      : this.props.history.push({ pathname: '/random', location: this.state.location })
  }

  // test = value => {
  // console.log(value)
  // this.setState({value:value})
  // }
  render() {
    return (
      <React.Fragment>
        {/* <Rating  placeholderRating={this.state.value} onClick={this.test} /> */}

        <div className="d-flex justify-content-center align-items-center">
          <b><label className="form-label" htmlFor="Location" style={{ color: "green" }}>Location</label></b>
        </div>
        <div className="d-flex justify-content-center align-items-center col-xs-3 col-s-3 col-md-3 col-lg-3 offset-md-5">
          <hr />
          <input type="text" className="form-control" placeholder="Irvine" name="location" onChange={this.onChange} value={this.state.location} />
          <div className="input-group-append">
            <button className="btn btn-success" type="button" onClick={this.onClick}>Button</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LocationFinder