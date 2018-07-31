/* global it, expect, shallow, beforeEach */

import React from 'react';

import DropdownContent from './index';

let component = null;

beforeEach(() => {
  component = shallow(<DropdownContent />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
