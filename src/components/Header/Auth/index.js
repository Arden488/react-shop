import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';

class Auth extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <div>
        <i data-feather="user" />
      </div>
    );
  }
}

export default Auth;
