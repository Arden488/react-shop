import axios from 'axios';
import { fetchProductsSuccess } from './types';

export function fetchProducts() {
  const request = axios.get('http://localhost:3004/products');

  return (dispatch: any) => {
    request.then((response: any) => {
      dispatch({
        payload: response.data,
        type: fetchProductsSuccess,
      })
    });
  }
}
