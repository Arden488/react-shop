// import { combineReducers } from 'redux';

import ProductsFilter from './reducer_filter_products';
import Filters from './reducer_filters';
import ProductsReducer from './reducer_products';

export default (state = {}, action: any) => {
  return {
    ...ProductsReducer({}, action, state),
    ...ProductsFilter({}, action, state),
    ...Filters({}, action, state),
  }
};
