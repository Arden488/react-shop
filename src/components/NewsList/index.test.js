/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import NewsList from './index';
import NewsListItem from '../NewsListItem';

let component = null;

beforeEach(() => {
  component = shallow(<NewsList />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should have NewsListItem', () => {
  expect(component.find(NewsListItem).length).toBeGreaterThanOrEqual(1);
});
