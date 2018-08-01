import { shallow } from 'enzyme';
import * as React from 'react';

import CatalogRoot from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<CatalogRoot />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
