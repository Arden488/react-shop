/* global it, expect, shallow, beforeEach */

import React from 'react';

import NotFound from './index';

let component = null;

beforeEach(() => {
  component = shallow(<NotFound />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});

