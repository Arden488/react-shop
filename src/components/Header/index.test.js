/* global it, expect, shallow, beforeEach */

import React from 'react';

import Header from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Header />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
