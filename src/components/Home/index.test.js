/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Home />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
