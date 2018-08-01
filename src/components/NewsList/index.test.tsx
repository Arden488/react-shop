import { shallow } from 'enzyme';
import * as React from 'react';

import NewsList from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<NewsList />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
