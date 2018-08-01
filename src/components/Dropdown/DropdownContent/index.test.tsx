import { shallow } from 'enzyme';
import * as React from 'react';

import DropdownContent from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<DropdownContent />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
