import * as React from 'react';

import './styles.css';

class DropdownMenu extends React.Component {
  public render() {
    return (
      <div className="dropdown-menu">
        {this.props.children}
      </div>
    );
  }
}

export default DropdownMenu;
