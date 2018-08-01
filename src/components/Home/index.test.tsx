import { shallow } from 'enzyme';
import * as React from 'react';

import Home from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Home />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
