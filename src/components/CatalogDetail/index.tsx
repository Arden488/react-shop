import * as React from 'react';

import './styles.css';

import ColorPicker from '../ColorPicker';
import DeliveryOptions from '../DeliveryOptions';
import FeaturedProducts from '../FeaturedProducts';
import ProductDetailControls from '../ProductDetailControls';
import ProductGallery from '../ProductGallery';
import ProductPrice from '../ProductPrice';
import SizePicker from '../SizePicker';
import Tabs from '../Tabs';

interface ICatalogDetailProps {
  match: any,
}

const CatalogDetail: React.SFC<ICatalogDetailProps> = props => (
  <div>
    <div className="catalog-detail">
      <div className="catalog-detail__content">
        <div className="catalog-detail__gallery">
          <ProductGallery />
        </div>
        <div className="catalog-detail__info">
          <h1>{props.match.params.code}</h1>
          <p>Some description</p>

          <div>
            <p>Choose options:</p>
            <div className="catalog-detail__opt-section">
              <ColorPicker />
            </div>
            <div className="catalog-detail__opt-section">
              <SizePicker />
            </div>
          </div>
          <div className="catalog-detail__opt-section">
            <ProductPrice />
          </div>
          <div className="catalog-detail__opt-section">
            <ProductDetailControls />
          </div>
          <div className="catalog-detail__opt-section">
            <DeliveryOptions />
          </div>
        </div>
      </div>
      <div className="catalog-detail__additional">
        <Tabs />
        Tabs - detailed description / characteristics
      </div>
      <FeaturedProducts />
    </div>
  </div>
);

export default CatalogDetail;
