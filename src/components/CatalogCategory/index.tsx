import * as React from 'react';

import CatalogElementList from '../CatalogElementList';
import CatalogFilter from '../CatalogFilter';

import './styles.css';

interface ICatalogCategoryProps {
  match: any
}

const CatalogCategory: React.SFC<ICatalogCategoryProps> = props => (
  <div>
    <h1>{props.match.params.cat}</h1>
    <div className="catalog-detail">
      <CatalogFilter />
      <CatalogElementList items={[1, 2, 3, 4, 5]} />
    </div>
  </div>
);

export default CatalogCategory;
