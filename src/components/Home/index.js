import React from 'react';

import Slider from '../Slider';
import HotProducts from '../HotProducts';
import FeaturedProducts from '../FeaturedProducts';
import DiscountedProducts from '../DiscountedProducts';

import './styles.css';

const Home = () => (
  <div>
    <Slider />
    
    <h2>Top sale:</h2>
    <HotProducts />

    <h2>Featured</h2>
    <FeaturedProducts />

    <h2>Best discounts:</h2>
    <DiscountedProducts />
  </div>
);

export default Home;
