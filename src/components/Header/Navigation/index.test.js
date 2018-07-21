/* global it, expect, mount, beforeEach */

import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import Navigation from './index';

let component = null;

beforeEach(() => {
  component = mount(<Router><Navigation /></Router>).find('Navigation nav');
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
