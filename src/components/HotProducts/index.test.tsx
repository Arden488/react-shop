/* global it, expect, shallow, beforeEach */

import React from 'react';
import HotProducts from './index';

let component = null;

beforeEach(() => {
  component = shallow(<HotProducts />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
