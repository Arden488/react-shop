import React from 'react';

import CatalogElementListItem from '../CatalogElementListItem';

import './styles.css';

const CatalogElementList = () => (
  <div className="product-list">
    <CatalogElementListItem code="1" title="Товар 1" />
    <CatalogElementListItem code="2" title="Товар 2" />
    <CatalogElementListItem code="3" title="Товар 3" />
    <CatalogElementListItem code="4" title="Товар 4" />
    <CatalogElementListItem code="5" title="Товар 5" />
  </div>
);

export default CatalogElementList;
