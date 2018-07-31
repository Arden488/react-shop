/* global it, expect, shallow, beforeEach */

import React from 'react';
import CatalogRoot from './index';

let component = null;

beforeEach(() => {
  component = shallow(<CatalogRoot />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
