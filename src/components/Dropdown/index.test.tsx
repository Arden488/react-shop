import { shallow } from 'enzyme';
import * as React from 'react';

import DropdownContent from './DropdownContent';
import DropdownMenu from './DropdownMenu';
import Dropdown from './index';

let component: any = null;

beforeEach(() => {
  component = shallow(<Dropdown><button /></Dropdown>);
});

it('matches snapshot', () => {
  expect(component).toMatchSnapshot();
});

it('matches snapshot with menu', () => {
  component = shallow(<Dropdown><button /><DropdownMenu /></Dropdown>);
  expect(component).toMatchSnapshot();
});

it('matches snapshot with content', () => {
  component = shallow(<Dropdown><button /><DropdownContent /></Dropdown>);
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
  component = shallow(<Dropdown><button /></Dropdown>);

  expect(component.state('openDropdownMenu')).toBeFalsy();

  component.find('.dropdown__trigger').simulate('click');
  expect(spy).toHaveBeenCalled();
  expect(component.state('openDropdownMenu')).toBeTruthy();
  spy.mockRestore();
});
