import { combineReducers } from 'redux';

import ProductsFilterReducer from './reducer_filter_products';
import FiltersReducer from './reducer_filters';
import ProductsReducer from './reducer_products';

const rootReducer = combineReducers({
  filters: FiltersReducer,
  products: ProductsReducer,
  productsFilterOptions: ProductsFilterReducer,
});

export default rootReducer;
