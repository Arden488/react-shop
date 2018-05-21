/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './index';

let component = null;

beforeEach(() => {
  component = shallow(<NotFound />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should have heading', () => {
  expect(component.find('h1').length).toEqual(1);
});

