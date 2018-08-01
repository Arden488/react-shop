import { shallow } from 'enzyme';
import * as React from 'react';

import FeaturedProducts from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<FeaturedProducts />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
