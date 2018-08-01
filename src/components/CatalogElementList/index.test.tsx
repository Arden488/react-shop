import { shallow } from 'enzyme';
import * as React from 'react';

import CatalogElementList from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<CatalogElementList />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
