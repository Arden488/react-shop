/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import Cart from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Cart />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
