import React, { Component } from 'react';
import feather from 'feather-icons';

class Cart extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <div>
        <i data-feather="shopping-cart" />
      </div>
    );
  }
}

export default Cart;
