/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import NewsDetail from './index';

let component = null;

beforeEach(() => {
  component = shallow(<NewsDetail match={{ params: { code: 'test' } }} />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});

it('should have Back link', () => {
  expect(component.find('button').children().text()).toEqual('Назад');
});

// it('should call history.goBack when clicked', () => {
//   const goBack = jest.fn();
//   component.find('button').props().onClick();
//   goBack();
//   expect(goBack).toHaveBeenCalled();
// });
