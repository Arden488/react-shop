import { shallow } from 'enzyme';
import * as React from 'react';

import DeliveryPicker from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<DeliveryPicker />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
