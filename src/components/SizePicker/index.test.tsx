import { shallow } from 'enzyme';
import * as React from 'react';

import SizePicker from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<SizePicker />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
