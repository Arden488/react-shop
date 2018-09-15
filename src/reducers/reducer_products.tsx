import { fetchProductsSuccess } from '../actions/types';

export default function(state = {}, action: {type: string, payload: any}, root: any) {
  switch (action.type) {
    case fetchProductsSuccess:
      return {
        ...root,
        products: action.payload,
      }
  }

  return {}
}
