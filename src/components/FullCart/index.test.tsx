import { shallow } from 'enzyme';
import * as React from 'react';

import FullCart from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<FullCart />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
