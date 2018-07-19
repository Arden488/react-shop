import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DropdownMenu from './DropdownMenu';

import './styles.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.content = [];
    this.menu = '';

    this.state = {
      openDropdownMenu: false,
    };

    this.prefilterChildren(this.props.children);

    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  prefilterChildren(children) {
    React.Children.forEach(children, (child) => {
      if (child.type === DropdownMenu) {
        this.menu = child;
      } else {
        this.content.push(child);
      }
    });
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    console.log(this.wrapperRef.contains(event.target));
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        openDropdownMenu: false,
      });
    }
  }

  handleTriggerClick() {
    this.setState({
      openDropdownMenu: true,
    });
  }

  render() {
    let menuClasses = 'dropdown__menu';
    if (this.state.openDropdownMenu) menuClasses += ' dropdown__menu_active';

    return (
      <div className="dropdown" ref={this.setWrapperRef}>
        <div className="dropdown__trigger" onClick={this.handleTriggerClick}>
          {this.content}
        </div>
        <div className={menuClasses}>
          {this.menu}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Dropdown;
