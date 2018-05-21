/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import CatalogRoot from './index';

let component = null;

beforeEach(() => {
  component = shallow(<CatalogRoot />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
