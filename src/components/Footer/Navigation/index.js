import React from 'react';
import { Link } from 'react-router-dom';

import mainNavItems from '../../../config/mainNav';

import './styles.css';

const Navigation = () => (
  <nav className="footer-navigation">
    {mainNavItems.map(item => <Link className="footer-navigation__item" key={item.path} to={item.path}>{item.title}</Link>)}
  </nav>
);

export default Navigation;
