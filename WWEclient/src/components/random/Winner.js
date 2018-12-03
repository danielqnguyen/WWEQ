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

  // redirect = () => window.locationxx = JSON.stringify(this.state.url);

  redirect = () => console.log(this.state.url)

  render() {
    const list = this.state.address.map((item, idx) => {
      return <p key={idx}>{item}</p>
    })
    if (this.state.url === "N/A") {
      return (
        <React.Fragment>
          <div className="container-fluid flex-grow-1 container-p-y">
            <div className="card mb-4 col-md-6 offset-md-3">
              <div className="card-header">
                <h1>{this.state.information.name}</h1>
                <div className="card-body">
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
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="container-fluid flex-grow-1 container-p-y">
            <div className="card mb-4 col-md-6 offset-md-3">
              <div className="card-header">
                <h1>{this.state.information.name}</h1>
                <div className="card-body">
                  <img src={this.state.information.image_url} height="200px" width="200px" alt="" />
                  <h4>Telephone: {this.state.information.display_phone}</h4>
                  <h4>Address: {list}</h4>
                  <h4>Website:<a href={("www." + this.state.url)} target="_blank"> {this.state.url}</a></h4>
                  <h4>Website:<span onClick={() => this.redirect()} target="_blank"> {this.state.url}</span></h4>
                  <div>
                    <button onClick={this.onClick} className="btn btn-success">More</button>
                  </div>
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