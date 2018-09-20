import { mount, shallow } from 'enzyme';
import * as React from 'react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CatalogCategory from './index';

const mockStore = configureStore([thunk]);
let store: any;
const initialState = {
  filters: { data: {} },
  products: { data: [] },
  productsFilterOptions: { data: {} },
};
let component: React.ReactNode = null;

beforeEach(() => {
  store = mockStore(initialState);
  component = mount(<Provider store={store}><CatalogCategory match={{ params: { cat: 'test' } }} /></Provider>);
});

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});
