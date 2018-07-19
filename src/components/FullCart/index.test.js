/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import FullCart from './index';

let component = null;

beforeEach(() => {
  component = shallow(<FullCart />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
