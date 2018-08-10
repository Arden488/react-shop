import * as React from 'react';

import './styles.css';

const ProductPrice = () => (
  <div className="product-price">
    <span className="product-price__main-value">
      $520
      <span className="product-price__discount">-20%</span>
    </span>
    <span className="product-price__old-value">$650</span>
  </div>
);

export default ProductPrice;
