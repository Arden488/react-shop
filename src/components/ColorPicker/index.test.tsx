import { shallow } from 'enzyme';
import * as React from 'react';

import ColorPicker from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<ColorPicker />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
