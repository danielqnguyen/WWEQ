import React, { Component } from 'react';
import TTLService from './TTLService'

class TopTen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    TTLService.list(this.onSuccess, this.onError)
  }

  onSuccess = response => console.log(response.data.Items)

  onError = resp => console.log(resp)

  render() {
    return <h1>Hi</h1>
  }
}

export default TopTen