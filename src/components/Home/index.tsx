import * as React from 'react';

import DiscountedProducts from '../DiscountedProducts';
import FeaturedProducts from '../FeaturedProducts';
import HotProducts from '../HotProducts';

import './styles.css';

const Home = () => (
  <div>
    <h2>Top sale:</h2>
    <HotProducts items={[1, 2, 3]} />

    <h2>Featured</h2>
    <FeaturedProducts items={[1, 2, 3]} />

    <h2>Best discounts:</h2>
    <DiscountedProducts items={[1, 2, 3]} />
  </div>
);

export default Home;
