/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import Logo from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Logo />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
