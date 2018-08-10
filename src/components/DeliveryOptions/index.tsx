import * as React from 'react';

import './styles.css';

const DeliveryOptions = () => (
  <div className="delivery-options">
    <div className="delivery-options__item">
      <span className="delivery-options__icon" />
      Pickup at nearest shop — free
    </div>
    <div className="delivery-options__item">
      <span className="delivery-options__icon" />
      Courier delivery — free
    </div>
  </div>
);

export default DeliveryOptions;
