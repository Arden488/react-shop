/* global it, expect, shallow, beforeEach */

import React from 'react';

import NewsListItem from './index';

let component = null;

beforeEach(() => {
  component = shallow(<NewsListItem code="1" title="1" />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
