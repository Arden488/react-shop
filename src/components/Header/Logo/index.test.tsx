/* global it, expect, shallow, beforeEach */

import React from 'react';
import Logo from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Logo />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
