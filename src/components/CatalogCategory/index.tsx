import * as React from 'react';
import * as PropTypes from 'prop-types';

import CatalogElementList from '../CatalogElementList/index';

export interface CatalogCategoryProps {
  match: any;
}

const CatalogCategory: React.SFC<CatalogCategoryProps> = props => (
  <div>
    <h1>{props.match.params.cat}</h1>
    <CatalogElementList />
  </div>
);

CatalogCategory.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      cat: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CatalogCategory;
