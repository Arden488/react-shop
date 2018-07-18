import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import mainNavItems from '../../../config/mainNav';

import './styles.css';

class Navigation extends Component {
  renderLink(item) {
    let linkClass = 'header-navigation__item';
    if (this.props.location.pathname === item.path) {
      linkClass += ' header-navigation__item_active';
    }
    return (
      <Link
        className={linkClass}
        key={item.path}
        to={item.path}
      >
        {item.title}
      </Link>
    );
  }

  render() {
    return (
      <nav className="header-navigation">
        {mainNavItems.map(item => this.renderLink(item))}
      </nav>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default withRouter(Navigation);
