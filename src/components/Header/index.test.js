/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';
import Navigation from '../Header/Navigation';
import Logo from './Logo';
import Cart from './Cart';
import Auth from './Auth';

let component = null;

beforeEach(() => {
  component = shallow(<Header />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should contain MainNavigation', () => {
  expect(component.find(Navigation).length).toEqual(1);
});

it('should contain Logo', () => {
  expect(component.find(Logo).length).toEqual(1);
});

it('should contain Auth', () => {
  expect(component.find(Auth).length).toEqual(1);
});

it('should contain Cart', () => {
  expect(component.find(Cart).length).toEqual(1);
});
