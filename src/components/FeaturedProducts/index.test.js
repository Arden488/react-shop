/* global it, expect, shallow, beforeEach */

import React from 'react';
import FeaturedProducts from './index';

let component = null;

beforeEach(() => {
  component = shallow(<FeaturedProducts />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
