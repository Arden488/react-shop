import { shallow } from 'enzyme';
import * as React from 'react';

import Slider from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Slider />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
