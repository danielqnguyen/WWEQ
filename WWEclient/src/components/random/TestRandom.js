import React from "react";
import Slider from "react-slick";
import "./index.css";
import YelpApi from './TestService';

class FoodRandomizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      restaurant: [],
      activeSlide: 0
    };
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    console.log(this.props.location)
    // if (!("location" in this.props.location)) {
    //   YelpApi.yelpTen('irivne', response => {
    //     this.setState({ restaurant: response.data.businesses });
    //   }, error => console.error(error));
    // } else {
    //   YelpApi.yelpTen(this.props.location.location, response => {
    //     this.setState({ restaurant: response.data.businesses });
    //   },
    //     error => console.error(error));
    // };
  }

  componentWillMount() {
    if (!("location" in this.props.location && "food" in this.props.location)) {
      YelpApi.yelpTen('food', 'irivne', response => {
        this.setState({ restaurant: response.data.businesses });
      }, error => console.error(error));
    } else {
      YelpApi.yelpTen(this.props.location.food, this.props.location.location, response => {
        console.log(response)
        this.setState({ restaurant: response.data.businesses })
      }, error => console.error(error))
    }
  }

  pause() {
    this.slider.slickPause();
    // console.log(this.state.restaurant)
  }

  play() {
    this.slider.slickPlay();
  }

  onClick = item => this.props.history.push({
    pathname: '/winner',
    info: item.id
  })

  render() {
    const list = this.state.restaurant.map((item, index) => {
      // console.log(item)
      return <div key={index}>
        <a onClick={() => this.onClick(item)}>
          <img src={item.image_url}
            height="400px"
            width="400px"
            alt={item.name}
          />
        </a>
      </div >
    });
    const settings = {
      className: "center",
      dots: false,
      autoplay: true,
      autoplaySpeed: 1,
      speed: 100,
      arrows: false,
      slidesToShow: 3,
      centerPadding: "10px",
      useTransform: false,
      beforeChange: (next) => this.setState({ activeSlide: next })
    };
    return (
      <React.Fragment>
        <div className="container-fluid flex-grow-1 container-p-y">
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {list}
          </Slider>
          <div className="btn-group" style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn btn-success" onClick={this.play}>Spin</button>
            <button className="btn btn-danger" onClick={this.pause}> Stop </button>
          </div>
        </div>
      </React.Fragment >
    );
  };
}

export default FoodRandomizer;
