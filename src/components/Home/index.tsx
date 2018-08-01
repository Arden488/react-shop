import * as React from 'react';

import DiscountedProducts from '../DiscountedProducts';
import FeaturedProducts from '../FeaturedProducts';
import HotProducts from '../HotProducts';
import Slider from '../Slider';

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
