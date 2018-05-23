import React, { Component } from 'react';
import feather from 'feather-icons';

class Logo extends Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <div>
        <i data-feather="zap" />
      </div>
    );
  }
}

export default Logo;
