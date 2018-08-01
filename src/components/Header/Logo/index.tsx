import * as feather from 'feather-icons';
import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Logo extends React.Component {
  public componentDidMount() {
    feather.replace();
  }

  public render() {
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
