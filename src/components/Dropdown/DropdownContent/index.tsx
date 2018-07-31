import React, { Component } from 'react';

import './styles.css';

class DropdownContent extends Component {
  render() {
    return (
      <div className="dropdown-content">
        {this.props.children}
      </div>
    );
  }
}

export default DropdownContent;
