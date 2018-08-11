import { shallow } from 'enzyme';
import * as React from 'react';

import Tab from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Tab />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
