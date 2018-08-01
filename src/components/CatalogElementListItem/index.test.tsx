import { shallow } from 'enzyme';
import * as React from 'react';

import CatalogElementListItem from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<CatalogElementListItem code="1" />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
