import * as React from 'react';

import './styles.css';

const ColorPicker = () => (
  <div className="color-picker">
    <button type="button" className="color-picker__item color-picker__item_selected">
    <span className="color-picker__color color-picker__color_gray" />
      <span className="color-picker__label">Gray space</span>
      <input className="color-picker__input" type="checkbox" name="" />
    </button>
    <button type="button" className="color-picker__item">
      <span className="color-picker__color" />
      <span className="color-picker__label">Black onyx</span>
      <input className="color-picker__input" type="checkbox" name="" />
    </button>
  </div>
);

export default ColorPicker;
