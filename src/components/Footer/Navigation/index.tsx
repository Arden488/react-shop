import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import mainNavItems from '../../../config/mainNav';

import './styles.css';

interface INavigationProps extends RouteComponentProps<any> {
  location: any,
}

class Navigation extends React.Component<INavigationProps> {
  public render() {
    return (
      <nav className="footer-navigation">
        {mainNavItems.map(item => this.renderLink(item))}
      </nav>
    );
  }

  private renderLink(item: { path: string, title: string }) {
    let linkClass = 'footer-navigation__item';
    if (this.props.location.pathname === item.path) {
      linkClass += ' footer-navigation__item_active';
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
}

export default withRouter(Navigation);
