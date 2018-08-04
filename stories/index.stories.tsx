import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
// import { linkTo } from '@storybook/addon-links';

import CatalogElementListItem from '../src/components/CatalogElementListItem';
import Dropdown from '../src/components/Dropdown';
import DropdownContent from '../src/components/Dropdown/DropdownContent';
import DropdownMenu from '../src/components/Dropdown/DropdownMenu';

storiesOf('Dropdown', module)
  .add('with custom content', () => (
    <div>
      <Dropdown>
        <button onClick={action('dropdown-click')}>Dropdown</button>
        <DropdownContent>
          Test content
        </DropdownContent>
      </Dropdown>
    </div>
  ))
  .add('with menu', () => (
    <div>
      <Dropdown>
        <button>Dropdown</button>
        <DropdownMenu>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </DropdownMenu>
      </Dropdown>
    </div>
  ));

storiesOf('Catalog Element List Item', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <div>
      <CatalogElementListItem code="1" key={1} />
    </div>
  ))