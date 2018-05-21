import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

const CatalogElementListItem = props => (
  <div className="product-item">
    <Link className="product-item__link" to={`/product/${props.code}`}>
      <div className="product-item__image"><img src="/img/iphone8_red.webp" alt="Apple iPhone 8 64 ГБ (PRODUCT)RED" /></div>
      <div className="product-item__title">Apple iPhone 8 64 ГБ (PRODUCT)RED</div>
      <div className="product-item__controls">
        <div className="product-item__price">39 990 ₽</div>
        <div className="product-item__buy">
          <button>Купить</button>
        </div>
      </div>
    </Link>
  </div>
);

CatalogElementListItem.propTypes = {
  code: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
};

export default CatalogElementListItem;
