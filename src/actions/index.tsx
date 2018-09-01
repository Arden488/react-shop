import axios from 'axios';
import { fetchProductsSuccess } from './types';

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
