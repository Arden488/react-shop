import * as React from 'react';

import Navigation from '../Header/Navigation';
import Auth from './Auth';
import Cart from './Cart';
import Logo from './Logo';

import './styles.css';

const Header = () => (
  <header className="page-header">
    <Logo />
    <Navigation />
    <Auth />
    <Cart />
  </header>
);

export default Header;
