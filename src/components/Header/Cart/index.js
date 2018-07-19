import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';

import './styles.css';

class Cart extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <div className="header-cart">
        <Link to="/cart">
          <i data-feather="shopping-cart" />
          <span>0 руб.</span>
        </Link>
      </div>
    );
  }
}

export default Cart;
