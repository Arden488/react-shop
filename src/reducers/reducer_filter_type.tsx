import { filterProductsByTypeAction } from '../actions/types';

export default function(initialState: any, action: { type: string, payload: any }, root: any) {
  switch (action.type) {
    case filterProductsByTypeAction:
      const { products } = root;
      products.items.filter((item: any) => {
        return item.type === action.payload;
      });
      
      return {
        ...initialState,
        ...products,
      }
  }

  return {};
}
