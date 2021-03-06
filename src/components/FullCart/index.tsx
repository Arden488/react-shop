import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const FullCart = () => (
  <div>
    <h1>Cart</h1>
    <div className="full-cart">
      <div className="full-cart-item">
        <img className="full-cart-item__image" src="/img/iphone8_red.webp" alt="Apple iPhone 8 64 ГБ (PRODUCT)RED" />
        <div className="full-cart-item__title">Apple iPhone 8 64 ГБ (PRODUCT)RED</div>
        <div className="full-cart-item__controls">
          <div className="full-cart-item__qnt">Quantity</div>
          <div className="full-cart-item__price">39 990 ₽</div>
          <div className="full-cart-item__remove">
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className="full-cart-item">
      <img className="full-cart-item__image" src="/img/iphone8_red.webp" alt="Apple iPhone 8 64 ГБ (PRODUCT)RED" />
        <div className="full-cart-item__title">Apple iPhone 8 64 ГБ (PRODUCT)RED</div>
        <div className="full-cart-item__controls">
          <div className="full-cart-item__qnt">Quantity</div>
          <div className="full-cart-item__price">39 990 ₽</div>
          <div className="full-cart-item__remove">
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className="full-cart-item">
      <img className="full-cart-item__image" src="/img/iphone8_red.webp" alt="Apple iPhone 8 64 ГБ (PRODUCT)RED" />
        <div className="full-cart-item__title">Apple iPhone 8 64 ГБ (PRODUCT)RED</div>
        <div className="full-cart-item__controls">
          <div className="full-cart-item__qnt">Quantity</div>
          <div className="full-cart-item__price">39 990 ₽</div>
          <div className="full-cart-item__remove">
            <button>Remove</button>
          </div>
        </div>
      </div>

      <div className="full-cart__summ">
        Summary:
        <span className="full-cart__summ-value">39 990 ₽</span>
      </div>

      <button><Link to="/checkout">Proceed to checkout</Link></button>
    </div>
  </div>
);

export default FullCart;
