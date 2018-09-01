import * as React from 'react';

import DiscountedProducts from '../DiscountedProducts';
import FeaturedProducts from '../FeaturedProducts';
import HotProducts from '../HotProducts';

import './styles.css';

// interface IHomeProps {}

interface IHomeState {
  dpItems: Array<{ id: number, article: number, image: string, price: string, title: string }>,
  fpItems: Array<{ id: number, article: number, image: string, price: string, title: string }>,
  hpItems: Array<{ id: number, article: number, image: string, price: string, title: string }>,
}

class Home extends React.Component<any, IHomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      dpItems: [{
        article: 342432,
        id: 1,
        image: "iphone8_red.webp",
        price: "39990",
        title: "Apple iPhone 8 32 ГБ (PRODUCT)RED",
      }, {
        article: 342433,
        id: 2,
        image: "iphone8_red.webp",
        price: "49990",
        title: "Apple iPhone 8 64 ГБ (PRODUCT)RED",
      }, {
        article: 342434,
        id: 3,
        image: "iphone8_red.webp",
        price: "59990",
        title: "Apple iPhone 8 256 ГБ (PRODUCT)RED",
      }],
      fpItems: [{
        article: 342435,
        id: 1,
        image: "iphone8_red.webp",
        price: "39990",
        title: "Apple iPhone 8 32 ГБ (PRODUCT)RED",
      }, {
        article: 342436,
        id: 2,
        image: "iphone8_red.webp",
        price: "49990",
        title: "Apple iPhone 8 64 ГБ (PRODUCT)RED",
      }, {
        article: 342437,
        id: 3,
        image: "iphone8_red.webp",
        price: "59990",
        title: "Apple iPhone 8 256 ГБ (PRODUCT)RED",
      }],
      hpItems: [{
        article: 342438,
        id: 1,
        image: "iphone8_red.webp",
        price: "39990",
        title: "Apple iPhone 8 32 ГБ (PRODUCT)RED",
      }, {
        article: 342439,
        id: 2,
        image: "iphone8_red.webp",
        price: "49990",
        title: "Apple iPhone 8 64 ГБ (PRODUCT)RED",
      }, {
        article: 342440,
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
