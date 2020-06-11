import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.scss";
import './index.scss'

class SliderBlock extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.data)
  }

  render() {
    const settings = {
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const { position, title, text, images } = this.props.data

    return (
      <section className={`slider-block ${position}`}>
        <h2>{ title }</h2>
        <p>{ text }</p>
        <Slider {...settings}>
          {
            images.map(image => (
              <div>
                <img src={`${process.env.NEXT_PUBLIC_API_PATH}${image.url}`} alt="" />
              </div>
            ))
          }
        </Slider>
      </section>
    );
  }
}

export default SliderBlock
