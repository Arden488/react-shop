/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import NewsListItem from './index';

let component = null;

beforeEach(() => {
  component = shallow(<NewsListItem code="1" title="1" />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should have Link', () => {
  expect(component.find(Link).length).toBeGreaterThanOrEqual(1);
});
