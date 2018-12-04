import React from "react";
import YelpApi from "./TestService";
import UsersService from '../users/UsersService'

class Winner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      information: [],
      address: [],
      categories: [],
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
        UsersService.testScraper({ "url": yelpfirst.url }, response => { this.setState({ url: response.data, information: yelpfirst, address: yelpfirst.location.display_address, categories: yelpfirst.categories }) },
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
    const cat = this.state.categories.map((item, idx) => {
      return <p key={idx}>{item.title}</p>
    })
    if (this.state.url === "N/A") {
      return (
        <React.Fragment>
          <div className="container-fluid flex-grow-1 container-p-y">
            <div className="card mb-4 col-md-5 offset-md-3">
              <div className="card-header">
                <h1>{this.state.information.name}</h1>
                <div className="card-body">
                  <img src={this.state.information.image_url} height="200px" width="200px" alt="" />
                  <h5>Telephone: {this.state.information.display_phone}</h5>
                  <h5>Address: {list}</h5>
                  <h5>Categories: {cat}</h5>
                  <h5>Website: "N/A" </h5>
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
                  <h5>Telephone: {this.state.information.display_phone}</h5>
                  <h5>Address: {list}</h5>
                  <h5>Categories: {cat}</h5>
                  <h5>Website:<a href={("www." + this.state.url)} target="_blank" rel="noopener noreferrer"> {this.state.url}</a></h5>
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