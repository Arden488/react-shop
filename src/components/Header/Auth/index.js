import React, { Component } from 'react';
import feather from 'feather-icons';

import './styles.css';

class Auth extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <div className="header-auth">
        <i data-feather="user" />
      </div>
    );
  }
}

export default Auth;
