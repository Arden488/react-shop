import { shallow } from 'enzyme';
import * as React from 'react';

import DropdownMenu from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<DropdownMenu />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
