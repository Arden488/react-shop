/* global it, expect, shallow, beforeEach */

import React from 'react';

import Register from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Register />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
