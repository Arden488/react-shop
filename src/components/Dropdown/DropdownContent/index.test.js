/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import DropdownContent from './index';

let component = null;

beforeEach(() => {
  component = shallow(<DropdownContent />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
