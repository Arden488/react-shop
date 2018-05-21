/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import CatalogCategory from './index';
import CatalogElementList from '../CatalogElementList';

let component = null;

beforeEach(() => {
  component = shallow(<CatalogCategory match={{ params: { cat: 'test' } }} />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should contain heading', () => {
  expect(component.find('h1').length).toEqual(1);
});

it('should contain CatalogElementList', () => {
  expect(component.find(CatalogElementList).length).toBeGreaterThanOrEqual(1);
});
