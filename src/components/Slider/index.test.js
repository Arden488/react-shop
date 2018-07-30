/* global it, expect, shallow, beforeEach */

import React from 'react';
import Slider from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Slider />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
