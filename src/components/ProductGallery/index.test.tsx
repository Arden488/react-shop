import { shallow } from 'enzyme';
import * as React from 'react';

import ProductGallery from './index';

let component: React.ReactNode = null;

beforeEach(() => {
  component = shallow(<ProductGallery />);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
