import { shallow } from 'enzyme';
import * as React from 'react';

import CatalogSort from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<CatalogSort />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
