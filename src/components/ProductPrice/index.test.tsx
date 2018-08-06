import { shallow } from 'enzyme';
import * as React from 'react';

import ProductPrice from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<ProductPrice />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
