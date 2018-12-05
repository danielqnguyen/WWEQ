import React, { Component } from 'react'

var Rating = require('react-rating');

class Scraping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val })
  }

  render() {
    return (
      <div>
        <Rating {...this.props} initialRating={this.state.value} />
      </div>
    )
  }
}

export default Scraping