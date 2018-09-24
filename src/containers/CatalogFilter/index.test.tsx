import { mount, shallow } from 'enzyme';
import * as React from 'react';

import { Provider } from 'react-redux';
import { MemoryRouter, Router } from 'react-router';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CatalogFilter from './index';

const mockStore = configureStore([thunk]);
let store: any;
const initialState = {
  filters: { data: {
    price_range: {
      field_type: "range",
      name: "price",
      options: {
        max: "1000",
        min: "300"
      },
      title: "Price range"
    },
    type: {
      field_type: "checkbox",
      name: 'type',
      title: 'Type',
      variants: ["iPad 3", "iPad 4", "iPad 5", "iPad 6"]
    },
  } },
  products: { data: [] },
  productsFilterOptions: { data: {} },
};
let component: any = null;

beforeEach(() => {
  store = mockStore(initialState);
  component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={[ { pathname: '/catalog/ipad', key: 'abcdef' } ]}>
        <CatalogFilter />
      </MemoryRouter>
    </Provider>);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});

it('dispatch filter action', () => {
  const checkbox = component.find('.products-filter-property').at(0);
  
  checkbox.simulate('change', {
    target: { checked: true }
  });

  expect(store.getActions()).toMatchSnapshot();
});
