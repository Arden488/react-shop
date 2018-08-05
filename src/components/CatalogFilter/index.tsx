import * as React from 'react';

const CatalogFilter = () => (
  <div>
    <div>
      <div>Product series:</div>
      <div>
        <input type="checkbox" value="" name="" /> iPhone X<br />
        <input type="checkbox" value="" name="" /> iPhone 8<br />
        <input type="checkbox" value="" name="" /> iPhone 7<br />
        <input type="checkbox" value="" name="" /> iPhone 6<br />
      </div>
    </div>
    <div>
      <div>Color:</div>
      <div>
        <input type="checkbox" value="" name="" /> Gray space<br />
        <input type="checkbox" value="" name="" /> Black<br />
        <input type="checkbox" value="" name="" /> Gold<br />
        <input type="checkbox" value="" name="" /> Gold rose
      </div>
    </div>
    <div>
      <div>Price range:</div>
      <div>From 0 to $1000</div>
    </div>
    <div>
      <div>Screen size:</div>
      <div>
        <input type="checkbox" value="" name="" /> 4'<br />
        <input type="checkbox" value="" name="" /> 5'<br />
        <input type="checkbox" value="" name="" /> 6'
      </div>
    </div>
    <div>
      <div>Memory size:</div>
      <div>
        <input type="checkbox" value="" name="" /> 16 Gb<br />
        <input type="checkbox" value="" name="" /> 32 Gb<br />
        <input type="checkbox" value="" name="" /> 64 Gb<br />
        <input type="checkbox" value="" name="" /> 128 Gb<br />
        <input type="checkbox" value="" name="" /> 256 Gb
      </div>
    </div>
    <div>
      <div>Release year:</div>
      <div>
        <div>
          <input type="checkbox" value="" name="" /> 2012<br />
          <input type="checkbox" value="" name="" /> 2011<br />
          <input type="checkbox" value="" name="" /> 2010<br />
          <input type="checkbox" value="" name="" /> 2009<br />
          <input type="checkbox" value="" name="" /> 2008
        </div>
        <a href="#">more</a>
      </div>
    </div>
  </div>
);

export default CatalogFilter;
