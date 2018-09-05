import { filterProductsAction } from '../actions/types';

export default function(initialState: any, action: { type: string, payload: any }, root: any) {
  switch (action.type) {
    case filterProductsAction:
      const productsFilterOptions = action.payload;  

      return {
        products: root.products,
        // ...root,
        // ...initialState,
        productsFilterOptions,
      }
  }

  return {};
}
