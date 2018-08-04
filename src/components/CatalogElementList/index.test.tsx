import { shallow } from 'enzyme';
import * as React from 'react';

import CatalogElementList from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<CatalogElementList items={[1, 2, 3, 4, 5]} />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
