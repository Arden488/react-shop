/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Auth from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Auth />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should have login link', () => {
  expect(component.find(Link).at(0).prop('to')).toEqual('/login');
});


it('should have register link', () => {
  expect(component.find(Link).at(1).prop('to')).toEqual('/registration');
});
