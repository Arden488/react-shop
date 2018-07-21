/* global it, expect, shallow, beforeEach */

import React from 'react';

import FullCart from './index';

let component = null;

beforeEach(() => {
  component = shallow(<FullCart />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
