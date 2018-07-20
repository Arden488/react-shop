import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';

import Dropdown from '../../Dropdown';
import DropdownContent from '../../Dropdown/DropdownContent';

import './styles.css';

class Cart extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <div className="header-cart">
        <Dropdown>
          <button>
            <i data-feather="shopping-cart" />
            <span>0 руб.</span>
          </button>
          <DropdownContent>
            <p>...</p>
            <Link to="/cart">Proceed to checkout</Link>
          </DropdownContent>
        </Dropdown>
      </div>
    );
  }
}

export default Cart;
