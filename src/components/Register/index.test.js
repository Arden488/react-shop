/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import Register from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Register />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
