import { passFiltersSuccess } from '../actions/types';

export default function(state = {}, action: { type: string, payload: any }) {
  switch (action.type) {
    case passFiltersSuccess:
      return {
        ...state,
        data: action.payload,
      }
  }

  return state;
}
