import { shallow } from 'enzyme';
import * as React from 'react';

import Register from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Register />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
