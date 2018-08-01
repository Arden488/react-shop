import { shallow } from 'enzyme';
import * as React from 'react';

import Profile from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Profile />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
