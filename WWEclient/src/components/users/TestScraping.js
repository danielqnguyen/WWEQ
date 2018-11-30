import React, { Component } from 'react'
import Testform from './Testform'
import UsersService from './UsersService'

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
    console.log(this.state)
  }

  onClick = () => {
    console.log(this.state)
    UsersService.testScraper(this.state, response => { console.log(response) })
  }

  render() {
    return (
      <Testform
        url={this.state.url}
        onChange={this.onChange}
        onClick={this.onClick}
      />
    )
  }
}

export default Scraping