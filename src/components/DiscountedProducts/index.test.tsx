import { shallow } from 'enzyme';
import * as React from 'react';

import DiscountedProducts from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<DiscountedProducts items={[1, 2, 3]} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
