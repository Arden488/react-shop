/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import CatalogDetail from './index';

let component = null;

beforeEach(() => {
  component = shallow(<CatalogDetail match={{ params: { code: 'test' } }} />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should have Back link', () => {
  expect(component.find('button').children().text()).toEqual('Назад');
});
