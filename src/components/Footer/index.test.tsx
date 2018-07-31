/* global it, expect, shallow, beforeEach */

import React from 'react';

import Footer from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Footer />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
