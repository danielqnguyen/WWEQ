import React from "react";
import Slider from "react-slick";
import "./index.css";
import YelpApi from './TestService'

class FoodRandomizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slickPause: false,
      location: '',
      restaurant: []
    }
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    console.log(this.props.location)
    if (!("location" in this.props.location)) {
      YelpApi.yelpTen('irivne', response => {
        this.setState({ restaurant: response.data.businesses })
      }, error => console.error(error))
    } else {
      YelpApi.yelpTen(this.props.location.location, response => {
        this.setState({ restaurant: response.data.businesses })
      },
        error => console.error(error))
    }
  }

  pause() {
    this.slider.slickPause();
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
      console.log(item)
      return <div key={index}>
        <a onClick={() => this.onClick(item)}>
          <img src={item.image_url}
            height="400px"
            width="400px"
            alt={item.name}
          />
        </a>
      </div >
    })
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
    };
    return (
      <React.Fragment>
        <div className="container-fluid flex-grow-1 container-p-y">
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {list}
          </Slider>
          <button className="btn btn-success float-center" onClick={this.play}>Play</button>
          <button className="btn btn-danger" onClick={this.pause}> Stop </button>
        </div>
      </React.Fragment >
    );
  }
}

export default FoodRandomizer
