import React from "react"
import AutoplaySlider from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';

const Slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    animation="foldOutAnimation"
    // cssModule={AwesomeSliderStyles}
  >
    <div data-src="../../images/1.jpg" />
    <div data-src="../../images/2.png" />
    <div data-src="../../images/3.png" />
  </AutoplaySlider>
);

export default Slider;