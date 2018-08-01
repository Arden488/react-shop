import { shallow } from 'enzyme';
import * as React from 'react';

import CatalogDetail from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<CatalogDetail match={{ params: { cat: 'test' } }} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
