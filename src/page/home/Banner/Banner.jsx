import React, { Component } from "react";
import Slider from "react-slick";
import './Banner.scss'

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="banner">
        <Slider {...settings}>
        
          <div className="banner__bn1">
            <h3></h3>
          </div>
          <div  className="banner__bn2">
            <h3></h3>
          </div>
          <div  className="banner__bn3">
            <h3></h3>
          </div>
          <div  className="banner__bn4">
            <h3></h3>
          </div>
          <div  className="banner__bn5">
            <h3></h3>
          </div>
         
        </Slider>
      </div>
  )
}
