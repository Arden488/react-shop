import * as React from 'react';

import DiscountedProducts from '../DiscountedProducts';
import FeaturedProducts from '../FeaturedProducts';
import HotProducts from '../HotProducts';

import './styles.css';

// interface IHomeProps {}

interface IHomeState {
  dpItems: Array<{ id: number, image: string, price: string, title: string }>,
  fpItems: Array<{ id: number, image: string, price: string, title: string }>,
  hpItems: Array<{ id: number, image: string, price: string, title: string }>,
}

class Home extends React.Component<any, IHomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      dpItems: [{
        id: 1,
        image: "iphone8_red.webp",
        price: "39990",
        title: "Apple iPhone 8 32 ГБ (PRODUCT)RED",
      }, {
        id: 2,
        image: "iphone8_red.webp",
        price: "49990",
        title: "Apple iPhone 8 64 ГБ (PRODUCT)RED",
      }, {
        id: 3,
        image: "iphone8_red.webp",
        price: "59990",
        title: "Apple iPhone 8 256 ГБ (PRODUCT)RED",
      }],
      fpItems: [{
        id: 1,
        image: "iphone8_red.webp",
        price: "39990",
        title: "Apple iPhone 8 32 ГБ (PRODUCT)RED",
      }, {
        id: 2,
        image: "iphone8_red.webp",
        price: "49990",
        title: "Apple iPhone 8 64 ГБ (PRODUCT)RED",
      }, {
        id: 3,
        image: "iphone8_red.webp",
        price: "59990",
        title: "Apple iPhone 8 256 ГБ (PRODUCT)RED",
      }],
      hpItems: [{
        id: 1,
        image: "iphone8_red.webp",
        price: "39990",
        title: "Apple iPhone 8 32 ГБ (PRODUCT)RED",
      }, {
        id: 2,
        image: "iphone8_red.webp",
        price: "49990",
        title: "Apple iPhone 8 64 ГБ (PRODUCT)RED",
      }, {
        id: 3,
        image: "iphone8_red.webp",
        price: "59990",
        title: "Apple iPhone 8 256 ГБ (PRODUCT)RED",
      }],
    }
  }

  public render() {
    return (
      <div>
        <h2>Top sale:</h2>
        <HotProducts items={this.state.hpItems} />

        <h2>Featured</h2>
        <FeaturedProducts items={this.state.fpItems} />

        <h2>Best discounts:</h2>
        <DiscountedProducts items={this.state.dpItems} />
      </div>
    );
  }
}

export default Home;
