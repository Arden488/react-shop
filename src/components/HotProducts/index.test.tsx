import { shallow } from 'enzyme';
import * as React from 'react';

import HotProducts from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<HotProducts items={[1, 2, 3]} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
