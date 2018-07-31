/* global it, expect, shallow, beforeEach */

import React from 'react';

import Auth from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Auth />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
