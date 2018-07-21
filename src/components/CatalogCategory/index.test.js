/* global it, expect, shallow, beforeEach */

import React from 'react';

import CatalogCategory from './index';
import CatalogElementList from '../CatalogElementList';

let component = null;

beforeEach(() => {
  component = shallow(<CatalogCategory match={{ params: { cat: 'test' } }} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
