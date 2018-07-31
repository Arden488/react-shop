/* global it, expect, shallow, beforeEach */

import React from 'react';

import CatalogElementListItem from './index';

let component = null;

beforeEach(() => {
  component = shallow(<CatalogElementListItem code="1" title="1" />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
