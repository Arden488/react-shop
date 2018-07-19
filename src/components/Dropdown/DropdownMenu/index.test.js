/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import DropdownMenu from './index';

let component = null;

beforeEach(() => {
  component = shallow(<DropdownMenu />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
