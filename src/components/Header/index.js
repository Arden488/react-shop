import React from 'react';

import Navigation from '../Header/Navigation';
import Logo from './Logo';
import Cart from './Cart';
import Auth from './Auth';

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
