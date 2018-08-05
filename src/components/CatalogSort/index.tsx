import * as React from 'react';

const CatalogSort = () => (
  <div>
    <div>
      <div>Sort by:</div>
      <div>
        <select name="" placeholder="Select sorting">
          <option value="">No sorting</option>
          <option value="price_asc">Price ascending</option>
          <option value="name_asc">Name ascending</option>
          <option value="price_desc">Price descending</option>
          <option value="name_desc">Name Descending</option>
        </select>
      </div>
    </div>
  </div>
);

export default CatalogSort;
