/* global it, expect, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Dropdown from './index';
import DropdownMenu from './DropdownMenu';
import DropdownContent from './DropdownContent';

let component = null;

beforeEach(() => {
  component = shallow(<Dropdown><button></button></Dropdown>);
});

it('matches snapshot', () => {
  expect(component).toMatchSnapshot();
});

it('matches snapshot with menu', () => {
  component = shallow(<Dropdown><button></button><DropdownMenu></DropdownMenu></Dropdown>);
  expect(component).toMatchSnapshot();
});

it('matches snapshot with content', () => {
  component = shallow(<Dropdown><button></button><DropdownContent></DropdownContent></Dropdown>);
  expect(component).toMatchSnapshot();
});

it('should have trigger with onclick event handler', () => {
  expect(component.find('.dropdown__trigger').prop('onClick')).toBeDefined();
});

it('should have openDropdownMenu state', () => {
  expect(component.state('openDropdownMenu')).toBeDefined();
});

it('should have trigger that handle click events and change state', () => {
  const spy = jest.spyOn(Dropdown.prototype, 'handleTriggerClick');
  component = shallow(<Dropdown><button></button></Dropdown>);

  expect(component.state('openDropdownMenu')).toBeFalsy();

  component.find('.dropdown__trigger').simulate('click');
  expect(spy).toHaveBeenCalled();
  expect(component.state('openDropdownMenu')).toBeTruthy();
  spy.mockRestore();
});
