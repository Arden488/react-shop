/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import CatalogElementList from './index';
import CatalogElementListItem from '../CatalogElementListItem';

let component = null;

beforeEach(() => {
  component = shallow(<CatalogElementList />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should contain CatalogElementListItem', () => {
  expect(component.find(CatalogElementListItem).length).toBeGreaterThanOrEqual(1);
});
