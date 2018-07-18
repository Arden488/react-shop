import React, { Component } from 'react';
import feather from 'feather-icons';

import './styles.css';

class Cart extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <div className="header-cart">
        <i data-feather="shopping-cart" />
      </div>
    );
  }
}

export default Cart;
