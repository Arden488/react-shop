/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import Login from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Login />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
