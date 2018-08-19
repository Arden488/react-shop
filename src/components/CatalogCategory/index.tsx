import * as React from 'react';

import CatalogElementList from '../CatalogElementList';
import CatalogFilter from '../CatalogFilter';
import CatalogSort from '../CatalogSort';

import './styles.css';

interface ICatalogCategoryProps {
  match: any
}

const CatalogCategory: React.SFC<ICatalogCategoryProps> = props => (
  <div>
    <h1>{props.match.params.cat}</h1>
    <div className="catalog-category-wrapper">
      <div className="catalog-category__aside">
        <CatalogFilter />
      </div>
      <div className="catalog-category__content">
        <CatalogSort />
        <CatalogElementList items={[1, 2, 3, 4, 5]} />
      </div>
    </div>
  </div>
);

export default CatalogCategory;
