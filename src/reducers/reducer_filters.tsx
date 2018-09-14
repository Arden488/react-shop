import { fetchProductsFilter } from '../actions/types';

export default function(state = {}, action: {type: string, payload: any}, root: any) {
  switch(action.type) {
    case fetchProductsFilter:
      return {
        ...state,
        filters: action.payload,
      }
  }

  return {}
}
