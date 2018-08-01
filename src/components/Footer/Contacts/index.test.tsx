import { shallow } from 'enzyme';
import * as React from 'react';

import Contacts from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Contacts />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
