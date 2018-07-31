/* global it, expect, shallow, beforeEach */

import React from 'react';

import Cart from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Cart />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
