import * as React from 'react';

import CatalogElementList from '../CatalogElementList/index';

interface ICatalogCategoryProps {
  match: any
}

const CatalogCategory: React.SFC<ICatalogCategoryProps> = props => (
  <div>
    <h1>{props.match.params.cat}</h1>
    <CatalogElementList />
  </div>
);

export default CatalogCategory;
