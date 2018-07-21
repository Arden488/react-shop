/* global it, expect, shallow, beforeEach */

import React from 'react';

import NewsDetail from './index';

let component = null;

beforeEach(() => {
  component = shallow(<NewsDetail match={{ params: { code: 'test' } }} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});

// it('should call history.goBack when clicked', () => {
//   const goBack = jest.fn();
//   component.find('button').props().onClick();
//   goBack();
//   expect(goBack).toHaveBeenCalled();
// });
