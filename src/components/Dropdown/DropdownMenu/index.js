import React, { Component } from 'react';

import './styles.css';

class DropdownMenu extends Component {
  render() {
    return (
      <div className="dropdown-menu">
        {this.props.children}
      </div>
    );
  }
}

export default DropdownMenu;
