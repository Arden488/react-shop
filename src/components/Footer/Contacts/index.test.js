/* global it, expect, shallow, beforeEach */

import React from 'react';

import Contacts from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Contacts />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
