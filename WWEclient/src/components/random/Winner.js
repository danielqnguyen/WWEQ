import React from "react";
import YelpApi from "./YelpService";
import SendTextApi from "./OtherServices";

class Winner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      information: [],
      address: [],
      categories: []
    };
  }

  componentDidMount = () => {
    if (!("info" in this.props.location)) {
      this.props.history.push("/");
    } else {
      YelpApi.yelpById(
        this.props.location.info,
        response => {
          this.setState({
            information: response.data,
            address: response.data.location.display_address,
            categories: response.data.categories
          });
        },
        error => console.error(error),
        this.setState({ isLoading: false })
      );
    }
  };

  sendText = () => SendTextApi.sendText();

  render() {
    const list = this.state.address.map((item, idx) => {
      return <a key={idx}>{item} </a>;
    });
    const cat = this.state.categories.map((item, idx) => {
      if (idx == this.state.categories.length - 1) {
        return <a key={idx}>{item.title}</a>;
      } else {
        return <a key={idx}>{item.title}, </a>;
      }
    });
    return (
      <React.Fragment>
        <div className="col-md-5 offset-md-3 p2" style={{ paddingTop: "10px" }}>
          <div className="card-header">
            <h2>
              <center>{this.state.information.name}</center>
            </h2>
            <div className="card-body">
              <center>
                <img
                  src={this.state.information.image_url}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </center>
              <hr />
              <h5>Telephone: {this.state.information.display_phone}</h5>
              <h5>Address: {list}</h5>
              <h5>Categories: {cat}</h5>
              <h5>
                <a
                  href={this.state.information.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Yelp{" "}
                </a>
              </h5>
              <center>
                <button className="btn btn-success" onClick={this.sendText}>
                  Text to Friends!
                  {/* currently sends to default number, need to create an input field */}
                </button>
              </center>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Winner;
