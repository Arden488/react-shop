/* global it, expect, shallow, beforeEach */

import React from 'react';

import PaymentAndDelivery from './index';

let component = null;

beforeEach(() => {
  component = shallow(<PaymentAndDelivery />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
