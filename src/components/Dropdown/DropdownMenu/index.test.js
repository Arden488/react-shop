/* global it, expect, shallow, beforeEach */

import React from 'react';

import DropdownMenu from './index';

let component = null;

beforeEach(() => {
  component = shallow(<DropdownMenu />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
