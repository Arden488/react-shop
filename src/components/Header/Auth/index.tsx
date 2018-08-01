import * as feather from 'feather-icons';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../Dropdown';
import DropdownMenu from '../../Dropdown/DropdownMenu';

import './styles.css';

class Auth extends React.Component {
  public componentDidMount() {
    feather.replace();
  }

  public render() {
    return (
      <div className="header-auth">
        <Dropdown>
          <button>
            <span>User</span>
            <i data-feather="user" />
          </button>
          <DropdownMenu>
            <Link to="/profile">Profile</Link>
            <Link to="/signout">Sign Out</Link>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default Auth;
