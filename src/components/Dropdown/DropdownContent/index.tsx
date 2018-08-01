import * as React from 'react';

import './styles.css';

class DropdownContent extends React.Component {
  public render() {
    return (
      <div className="dropdown-content">
        {this.props.children}
      </div>
    );
  }
}

export default DropdownContent;
