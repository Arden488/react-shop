import * as feather from 'feather-icons';
import * as React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../../Dropdown';
import DropdownContent from '../../Dropdown/DropdownContent';

import './styles.css';

class Cart extends React.Component {
  public componentDidMount() {
    feather.replace();
  }

  public render() {
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
