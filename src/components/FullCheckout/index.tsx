import * as React from 'react';

import './styles.css';

const FullCheckout = () => (
  <div className="full-checkout">
    <div>
      <h2>Delivery</h2>
      <h3>Type</h3>
      <p>Types of delivery</p>
      <h3>Address</h3>
      <p>Adress inputs</p>
      
      <hr />
      
      <h2>Buyer details</h2>
      <p>Information about buyer</p>
      
      <hr />
      
      <h2>Payment</h2>
      <p>Types of payment</p>
    </div>
    <div>
      Summary
    </div>
  </div>
);

export default FullCheckout;
