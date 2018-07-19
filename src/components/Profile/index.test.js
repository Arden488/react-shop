/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import Profile from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Profile />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
