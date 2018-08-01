import { shallow } from 'enzyme';
import * as React from 'react';

import PaymentAndDelivery from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<PaymentAndDelivery />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
