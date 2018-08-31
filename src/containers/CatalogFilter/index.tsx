import * as React from 'react';
import { connect } from 'react-redux';

import './styles.css';

class CatalogFilter extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <div className="catalog-filter__section">
          <div>Product series:</div>
          <div>
            <input type="checkbox" value="" name="" /> iPhone X<br />
            <input type="checkbox" value="" name="" /> iPhone 8<br />
            <input type="checkbox" value="" name="" /> iPhone 7<br />
            <input type="checkbox" value="" name="" /> iPhone 6<br />
          </div>
        </div>
        <div className="catalog-filter__section">
          <div>Color:</div>
          <div>
            <input type="checkbox" value="" name="" /> Gray space<br />
            <input type="checkbox" value="" name="" /> Black<br />
            <input type="checkbox" value="" name="" /> Gold<br />
            <input type="checkbox" value="" name="" /> Gold rose
          </div>
        </div>
        <div className="catalog-filter__section">
          <div>Price range:</div>
          <div>From 0 to $1000</div>
        </div>
        <div className="catalog-filter__section">
          <div>Screen size:</div>
          <div>
            <input type="checkbox" value="" name="" /> 4'<br />
            <input type="checkbox" value="" name="" /> 5'<br />
            <input type="checkbox" value="" name="" /> 6'
          </div>
        </div>
        <div className="catalog-filter__section">
          <div>Memory size:</div>
          <div>
            <input type="checkbox" value="" name="" /> 16 Gb<br />
            <input type="checkbox" value="" name="" /> 32 Gb<br />
            <input type="checkbox" value="" name="" /> 64 Gb<br />
            <input type="checkbox" value="" name="" /> 128 Gb<br />
            <input type="checkbox" value="" name="" /> 256 Gb
          </div>
        </div>
        <div className="catalog-filter__section">
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
    )
  }
}

function mapStateToProps(state: any) {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps)(CatalogFilter);
