/* global document */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DropdownMenu from './DropdownMenu';
import DropdownContent from './DropdownContent';

import './styles.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.triggerContent = [];
    this.content = '';
    this.menu = '';

    this.state = {
      openDropdownMenu: false,
    };

    this.prefilterChildren(this.props.children);

    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  prefilterChildren(children) {
    React.Children.forEach(children, (child) => {
      if (child.type === DropdownMenu) {
        this.menu = child;
      } else if (child.type === DropdownContent) {
        this.content = child;
      } else {
        this.triggerContent.push(child);
      }
    });
  }

  handleClickOutside(event) {
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

  renderMenu() {
    let menuClasses = 'dropdown__menu';
    if (this.state.openDropdownMenu) menuClasses += ' dropdown__menu_active';

    return (
      <div className={menuClasses}>
        {this.menu}
      </div>
    );
  }

  renderContent() {
    let contentClasses = 'dropdown__content';
    if (this.state.openDropdownMenu) contentClasses += ' dropdown__content_active';

    return (
      <div className={contentClasses}>
        {this.content}
      </div>
    );
  }

  render() {
    return (
      <div className="dropdown" ref={this.setWrapperRef}>
        <div className="dropdown__trigger" onClick={this.handleTriggerClick}>
          {this.triggerContent}
        </div>
        {this.menu && this.renderMenu()}
        {this.content && this.renderContent()}
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Dropdown;
