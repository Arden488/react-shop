/* global it, expect, shallow, beforeEach */

import React from 'react';

import CatalogDetail from './index';

let component = null;

beforeEach(() => {
  component = shallow(<CatalogDetail match={{ params: { code: 'test' } }} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
