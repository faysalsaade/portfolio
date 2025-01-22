import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>dfsfsdf</h3>
      </div>
      <div>
        <h3>2sddsf</h3>
      </div>
      <div>
        <h3>3grg</h3>
      </div>
      <div>
        <h3>4rg</h3>
      </div>
      <div>
        <h3>5sssf</h3>
      </div>
      <div>
        <h3>6ssdsf</h3>
      </div>
    </Slider>
  );
}
