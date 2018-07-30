/* global it, expect, shallow, beforeEach */

import React from 'react';
import DiscountedProducts from './index';

let component = null;

beforeEach(() => {
  component = shallow(<DiscountedProducts />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
