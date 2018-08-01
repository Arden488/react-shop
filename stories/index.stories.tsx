import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import Dropdown from '../src/components/Dropdown/index.tsx';
import DropdownContent from '../src/components/Dropdown/DropdownContent/index.tsx';
import DropdownMenu from '../src/components/Dropdown/DropdownMenu/index.tsx';

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
