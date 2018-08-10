import * as React from 'react';

import './styles.css';

const SizePicker = () => (
  <div className="size-picker">
    <button type="button" className="size-picker__item size-picker__item_selected">
      <span className="size-picker__label">16 Gb</span>
      <input className="size-picker__input" type="checkbox" name="" />
    </button>
    <button type="button" className="size-picker__item">
      <span className="size-picker__label">32 Gb</span>
      <input className="size-picker__input" type="checkbox" name="" />
    </button>
    <button type="button" className="size-picker__item">
      <span className="size-picker__label">128 Gb</span>
      <input className="size-picker__input" type="checkbox" name="" />
    </button>
    <button type="button" className="size-picker__item">
      <span className="size-picker__label">256 Gb</span>
      <input className="size-picker__input" type="checkbox" name="" />
    </button>
    <button type="button" className="size-picker__item">
      <span className="size-picker__label">512 Gb</span>
      <input className="size-picker__input" type="checkbox" name="" />
    </button>
  </div>
);

export default SizePicker;
