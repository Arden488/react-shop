import * as React from 'react';

import './styles.css';

const ProductGallery = () => (
  <div className="product-gallery">
    <img src="/img/iphone1.webp" alt="" className="product-gallery__item product-gallery__item_active" />
    <img src="/img/iphone2.webp" alt="" className="product-gallery__item" />
    <img src="/img/iphone3.webp" alt="" className="product-gallery__item" />
    <img src="/img/iphone4.webp" alt="" className="product-gallery__item" />
  </div>
);

export default ProductGallery;
