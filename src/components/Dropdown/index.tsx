/* global document */

import * as React from 'react';

import DropdownContent from './DropdownContent/';
import DropdownMenu from './DropdownMenu/';

import './styles.css';

// tslint:disable-next-line
interface Dropdown {
  wrapperRef: any,
  triggerContent: any[],
  content: React.ReactChild,
  menu: React.ReactChild,
}

interface IDropdownState {
  openDropdownMenu: boolean,
}

class Dropdown extends React.Component<any, IDropdownState> {
  constructor(props: any) {
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

  public render() {
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

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  public handleTriggerClick() {
    this.setState({
      openDropdownMenu: !this.state.openDropdownMenu,
    });
  }

  private setWrapperRef(node: any) {
    this.wrapperRef = node;
  }

  private prefilterChildren(children: React.ReactNode) {
    React.Children.forEach(children, (child: React.ReactElement<any> ) => {
      if (child.type === DropdownMenu) {
        this.menu = child;
      } else if (child.type === DropdownContent) {
        this.content = child;
      } else {
        this.triggerContent.push(child);
      }
    });
  }

  private handleClickOutside(event: { target: any }) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        openDropdownMenu: false,
      });
    }
  }

  private renderMenu() {
    let menuClasses = 'dropdown__menu';
    if (this.state.openDropdownMenu) { menuClasses += ' dropdown__menu_active'; }

    return (
      <div className={menuClasses}>
        {this.menu}
      </div>
    );
  }

  private renderContent() {
    let contentClasses = 'dropdown__content';
    if (this.state.openDropdownMenu) { contentClasses += ' dropdown__content_active'; }

    return (
      <div className={contentClasses}>
        {this.content}
      </div>
    );
  }
}

export default Dropdown;
