import { shallow } from 'enzyme';
import * as React from 'react';

import CatalogElementList from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  const items = [{
    article: 762015,
    id: 1,
    image: "iphone8_red.webp",
    price: "39990",
    title: "Apple iPhone 8 32 ГБ (PRODUCT)RED",
    type: "iphone7",
  }, {
    article: 762016,
    id: 2,
    image: "iphone8_red.webp",
    price: "49990",
    title: "Apple iPhone 8 64 ГБ (PRODUCT)RED",
    type: "iphone8",
  }, {
    article: 762017,
    id: 3,
    image: "iphone8_red.webp",
    price: "59990",
    title: "Apple iPhone 8 256 ГБ (PRODUCT)RED",
    type: "iphone7",
  }]
  component = shallow(<CatalogElementList items={items} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
