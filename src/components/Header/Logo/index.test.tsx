import { shallow } from 'enzyme';
import * as React from 'react';

import Logo from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Logo />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
