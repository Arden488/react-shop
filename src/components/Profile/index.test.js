/* global it, expect, shallow, beforeEach */

import React from 'react';

import Profile from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Profile />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
