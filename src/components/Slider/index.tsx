import * as React from 'react';

import './styles.css';

const Slider = () => (
  <div className="main-slider">
    <img className="main-slider__item main-slider__item_active" src="img/slide3.jpg" alt="" />
    <img className="main-slider__item" src="img/slide2.jpg" alt="" />
    <img className="main-slider__item" src="img/slide1.jpg" alt="" />
  </div>
);

export default Slider;
