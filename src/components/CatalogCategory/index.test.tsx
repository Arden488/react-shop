import { shallow } from 'enzyme';
import * as React from 'react';

import CatalogCategory from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<CatalogCategory match={{ params: { cat: 'test' } }} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
