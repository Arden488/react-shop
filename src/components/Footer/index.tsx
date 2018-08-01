import * as React from 'react';

import Contacts from './Contacts';
import Navigation from './Navigation';

import './styles.css';

const Footer = () => (
  <footer className="page-footer">
    <Contacts />
    <Navigation />
  </footer>
);

export default Footer;
