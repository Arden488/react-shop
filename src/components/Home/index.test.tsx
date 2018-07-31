/* global it, expect, shallow, beforeEach */

import React from 'react';
import Home from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Home />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
