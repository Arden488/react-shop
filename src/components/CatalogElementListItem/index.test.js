/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import CatalogElementListItem from './index';

let component = null;

beforeEach(() => {
  component = shallow(<CatalogElementListItem code="1" title="1" />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should have image', () => {
  expect(component.find('img').length).toBeGreaterThanOrEqual(1);
});

it('should have title', () => {
  expect(component.find('.product-item__title').length).toEqual(1);
});

it('should have price', () => {
  expect(component.find('.product-item__price').length).toEqual(1);
});

it('should have buy button', () => {
  expect(component.find('.product-item__buy button').length).toEqual(1);
});
