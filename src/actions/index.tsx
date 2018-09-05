import axios from 'axios';
import { fetchProductsSuccess, filterProductsAction } from './types';

export function fetchProductsByCategory(category: string) {
  const request = axios.get(`http://localhost:3004/${category}`);

  return (dispatch: any) => {
    request.then((response: any) => {
      dispatch({
        payload: response.data,
        type: fetchProductsSuccess,
      })
    });
  }
}

export function filterProducts(options: {}) {
  return (dispatch: any) => {
    dispatch({
      payload: options,
      type: filterProductsAction,
    })
  }
}
