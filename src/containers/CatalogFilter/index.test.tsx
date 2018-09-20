import { mount, shallow } from 'enzyme';
import * as React from 'react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CatalogFilter from './index';

const mockStore = configureStore([thunk]);
let store: any;
const initialState = {
  filters: { data: {
    type: {
      field_type: "checkbox",
      name: 'type',
      title: 'Type',
      variants: ["iPad 3", "iPad 4", "iPad 5", "iPad 6"]
    }
  } },
  products: { data: [] },
  productsFilterOptions: { data: {} },
};
let component: React.ReactNode = null;

beforeEach(() => {
  store = mockStore(initialState);
  component = mount(<Provider store={store}><CatalogFilter /></Provider>);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
