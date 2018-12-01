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

  componentDidMount = () => {
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
    if (this.state.url === "N/A") {
      return (
        <React.Fragment>
          <div className="container-fluid flex-grow-1 container-p-y">
            <div className="card mb-4 col-md-6 offset-md-3">
              <div className="card-body">
                <h1>{this.state.information.name}</h1>
                <img src={this.state.information.image_url} height="200px" width="200px" alt="" />
                <h4>Telephone: {this.state.information.display_phone}</h4>
                <h4>Address: {list}</h4>
                <h4>Website: "N/A" </h4>
                <div>
                  <button onClick={this.onClick} className="btn btn-success">More</button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="container-fluid flex-grow-1 container-p-y">
            <div className="card mb-4 col-md-4 offset-md-4">
              <h1>{this.state.information.name}</h1>
              <div className="card-body">
                <img src={this.state.information.image_url} height="200px" width="200px" alt="" />
                <h4>Telephone: {this.state.information.display_phone}</h4>
                <h4>Address: {list}</h4>
                <h4>Website:<a href={("www." + this.state.url)}> {this.state.url}</a></h4>
                <div>
                  <button onClick={this.onClick} className="btn btn-success">More</button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Winner