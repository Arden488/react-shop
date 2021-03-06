import { shallow } from 'enzyme';
import * as React from 'react';

import Cart from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Cart />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
