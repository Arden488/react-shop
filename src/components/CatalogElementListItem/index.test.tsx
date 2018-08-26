import { shallow } from 'enzyme';
import * as React from 'react';

import CatalogElementListItem from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  const item = {
    id: 1,
    image: "iphone8_red.webp",
    price: "39990",
    title: "Apple iPhone 8 32 ГБ (PRODUCT)RED",
  };
  component = shallow(<CatalogElementListItem {...item} key={1} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
