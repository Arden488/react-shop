import { shallow } from 'enzyme';
import * as React from 'react';

import NewsListItem from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<NewsListItem code="1" title="1" />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
