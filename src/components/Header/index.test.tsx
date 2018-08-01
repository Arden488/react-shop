import { shallow } from 'enzyme';
import * as React from 'react';

import Header from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Header />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
