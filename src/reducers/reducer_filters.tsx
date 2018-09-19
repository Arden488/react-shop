import { fetchProductsFilter } from '../actions/types';

export default function(state = {}, action: {type: string, payload: any}) {
  switch(action.type) {
    case fetchProductsFilter:
      return {
        ...state,
        data: action.payload,
      }
  }

  return state;
}
