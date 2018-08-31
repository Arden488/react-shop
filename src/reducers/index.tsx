import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';

export default combineReducers({
  products: ProductsReducer,
});
