import React from "react";
import YelpApi from "./TestService";
import UsersService from '../users/UsersService'

class Winner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      information: [],
      address: [],
      url: ''
    }
  }

  componentDidMount() {
    if (!("info" in this.props.location)) {
      this.props.history.push("/")
    } else {
      console.log(this.props.location.info)
      YelpApi.yelpById(this.props.location.info, response => {
        console.log(response)
        let yelpfirst = response.data
        UsersService.testScraper({ "url": yelpfirst.url }, response => { this.setState({ url: response.data, information: yelpfirst, address: yelpfirst.location.display_address }) },
          error => { this.setState({ url: "N/A", information: yelpfirst, address: yelpfirst.location.display_address }) })
      })
    }
  }

  onClick = () => console.log(this.state)

  render() {
    const list = this.state.address.map((item, idx) => {
      return <p key={idx}>{item}</p>
    })
    let hi = this.state.information
    if (this.state.url === "N/A") {
      return (
        <React.Fragment>
          <div>
            <div className="card col-md-6">
              <h1>{hi.name}</h1>
              <img src={hi.image_url} height="400px" width="600px" />
              <h4>Telephone: {hi.display_phone}</h4>
              <h4>Address: {list}</h4>
              <h4>Website:{this.state.url}</h4>
              <button onClick={this.onClick} className="btn btn-success">More</button>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div>
            <div className="card col-md-6">
              <h1>{hi.name}</h1>
              <img src={hi.image_url} height="400px" width="600px" />
              <h4>Telephone: {hi.display_phone}</h4>
              <h4>Address: {list}</h4>
              <h4>Website: <a href={this.state.url}>{this.state.url}</a></h4>
              <button onClick={this.onClick} className="btn btn-success">More</button>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Winner