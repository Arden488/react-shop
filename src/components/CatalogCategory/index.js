import React from 'react';
import PropTypes from 'prop-types';

import CatalogElementList from '../CatalogElementList';

const CatalogCategory = props => (
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
