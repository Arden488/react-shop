/* global it, expect, shallow, beforeEach */

import React from 'react';

import News from './index';

let component = null;

beforeEach(() => {
  component = shallow(<News />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
