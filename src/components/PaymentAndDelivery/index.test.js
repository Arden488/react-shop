/* global it, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';

import PaymentAndDelivery from './index';

let component = null;

beforeEach(() => {
  component = shallow(<PaymentAndDelivery />);
});

it('renders without crashing', () => {
  expect(component.exists()).toEqual(true);
});
