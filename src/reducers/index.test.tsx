/* global it, expect */

import React from 'react';
import { createStore } from 'redux';

import rootReducer from './index';

it('should handle default state', () => {
  const store = createStore(rootReducer, {});
  
  const actual = store.getState();
  const expected = {"filters": {}, "products": [], "productsFilterOptions": {}};

  expect(actual).toEqual(expected);
});
