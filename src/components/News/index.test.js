/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import News from './index';
import NewsList from '../NewsList';

let component = null;

beforeEach(() => {
  component = shallow(<News />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('shoud have NewsList', () => {
  expect(component.find(NewsList).length).toEqual(1);
});
