import axios from 'axios';
import { fetchProductsFilter, fetchProductsSuccess, passFiltersSuccess } from './types';

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

export function passFilters(options: {}) {
  return (dispatch: any) => {
    dispatch({
      payload: options,
      type: passFiltersSuccess,
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
