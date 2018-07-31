/* global it, expect, shallow, beforeEach */

import React from 'react';

import NewsList from './index';

let component = null;

beforeEach(() => {
  component = shallow(<NewsList />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
