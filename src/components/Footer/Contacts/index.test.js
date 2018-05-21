/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import Contacts from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Contacts />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
