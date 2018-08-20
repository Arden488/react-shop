import { shallow } from 'enzyme';
import * as React from 'react';

import FullCheckout from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<FullCheckout />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
