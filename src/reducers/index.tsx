// import { combineReducers } from 'redux';

import ProductsFilterByType from './reducer_filter_type';
import ProductsReducer from './reducer_products';

export default (state = {}, action: any) => {
  return {
    products: ProductsReducer({}, action, state),
    productsFilteredByType: ProductsFilterByType({}, action, state),
  }
};
