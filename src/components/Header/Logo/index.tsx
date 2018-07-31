import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';

import './styles.css';

class Logo extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <div className="header-logo">
        <Link to="/">
          <i data-feather="zap" />
          <span>ZapShop</span>
        </Link>
      </div>
    );
  }
}

export default Logo;
