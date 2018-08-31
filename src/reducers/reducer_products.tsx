import { fetchProductsSuccess } from '../actions/types';

export default function(state = {}, action: {type: string, payload: any}) {
  switch (action.type) {
    case fetchProductsSuccess:
      return {
        ...state,
        ...action.payload,
      }
  }

  return {}
}
