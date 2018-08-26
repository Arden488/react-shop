import { shallow } from 'enzyme';
import * as React from 'react';

import DiscountedProducts from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  const items = [{
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
  }]
  component = shallow(<DiscountedProducts items={items} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
