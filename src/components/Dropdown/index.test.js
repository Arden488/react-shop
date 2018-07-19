/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Dropdown />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
