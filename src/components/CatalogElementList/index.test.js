/* global it, expect, shallow, beforeEach */

import React from 'react';

import CatalogElementList from './index';

let component = null;

beforeEach(() => {
  component = shallow(<CatalogElementList />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
