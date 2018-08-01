import { shallow } from 'enzyme';
import * as React from 'react';

import Auth from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Auth />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
