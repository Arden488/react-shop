/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';
import Contacts from './Contacts';
import Navigation from './Navigation';

let component = null;

beforeEach(() => {
  component = shallow(<Footer />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should contain Contacts', () => {
  expect(component.find(Contacts).length).toEqual(1);
});

it('should contain Navigation', () => {
  expect(component.find(Navigation).length).toEqual(1);
});
