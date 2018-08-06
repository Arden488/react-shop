import { shallow } from 'enzyme';
import * as React from 'react';

import ProductDetailControls from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<ProductDetailControls />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
