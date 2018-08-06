import { shallow } from 'enzyme';
import * as React from 'react';

import Tabs from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Tabs />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
