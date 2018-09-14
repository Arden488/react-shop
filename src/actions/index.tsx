import axios from 'axios';
import { fetchProductsFilter, fetchProductsSuccess, filterProductsAction } from './types';

export function fetchProductsByCategory(category: string) {
  const request = axios.get(`http://localhost:3004/products`);

  return (dispatch: any) => {
    request.then((response: any) => {
      dispatch({
        payload: response.data[category],
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

export function fetchFiltersByCategory(category: string) {
  const request = axios.get(`http://localhost:3004/filter`)

  return (dispatch: any) => {
    request.then((response: any) => {
      dispatch({
        payload: response.data[category],
        type: fetchProductsFilter,
      })
    });
  }
}
