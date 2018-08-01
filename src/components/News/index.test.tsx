import { shallow } from 'enzyme';
import * as React from 'react';

import News from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<News />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
