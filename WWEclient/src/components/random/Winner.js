import React from "react";
import YelpApi from "./TestService";

class Winner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      information: [],
      address: [],
      categories: []
    };
  }

  componentDidMount = () => {
    if (!("info" in this.props.location)) {
      this.props.history.push("/");
    } else {
      YelpApi.yelpById(this.props.location.info, response => {
        console.log(response)
        this.setState({
          information: response.data,
          address: response.data.location.display_address,
          categories: response.data.categories
        })
      });
    };
  }

  render() {
    const list = this.state.address.map((item, idx) => {
      console.log(item)
      return <p key={idx}>{item}</p>
    });
    const cat = this.state.categories.map((item, idx) => {
      console.log(item)

      return <p key={idx}>{item.title}</p>
    });
    return (
      <React.Fragment>
        <div className="container-fluid flex-grow-1 container-p-y test1">
          <div className="card mb-4 col-md-5 offset-md-3" style={{ overflow: "auto", height: "600px" }} >
            <div className="card-header">
              <h1>{this.state.information.name}</h1>
              <div className="card-body">
                <img src={this.state.information.image_url} height="200px" width="200px" alt="" />
                <h5>Telephone: {this.state.information.display_phone}</h5>
                <h5>Address: {list}</h5>
                <h5>Categories: {cat}</h5>
                <h5><a href={(this.state.information.url)} target="_blank" rel="noopener noreferrer"> Yelp </a></h5>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};


export default Winner;