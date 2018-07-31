/* global it, expect, shallow, beforeEach */

import React from 'react';

import Login from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Login />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
