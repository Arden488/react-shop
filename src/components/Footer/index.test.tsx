import { shallow } from 'enzyme';
import * as React from 'react';

import Footer from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<Footer />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
