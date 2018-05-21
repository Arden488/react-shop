import React from 'react';
import { Link } from 'react-router-dom';

import mainNavItems from '../../../config/mainNav';

import './styles.css';

const Navigation = () => (
  <nav className="header-navigation">
    {mainNavItems.map(item => <Link className="header-navigation__item" key={item.path} to={item.path}>{item.title}</Link>)}
  </nav>
);

export default Navigation;
