import { shallow } from 'enzyme';
import * as React from 'react';

import Login from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Login />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
