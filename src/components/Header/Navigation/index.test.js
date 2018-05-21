/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import { Link } from 'react-router-dom';
import Navigation from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Navigation />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should have Links', () => {
  expect(component.find(Link).length).toBeGreaterThan(1);
});
