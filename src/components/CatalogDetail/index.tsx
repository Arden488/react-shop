import * as React from 'react';

import './styles.css';

import ColorPicker from '../ColorPicker';
import DeliveryOptions from '../DeliveryOptions';
import FeaturedProducts from '../FeaturedProducts';
import ProductDetailControls from '../ProductDetailControls';
import ProductGallery from '../ProductGallery';
import ProductPrice from '../ProductPrice';
import SizePicker from '../SizePicker';
import Tab from '../Tab';
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
        <Tabs>
          <Tab label="Description">Description</Tab>
          <Tab label="Characteristics" active={true}>
            <table className="b-table">
              <tbody>
                <tr>
                  <th colSpan={2}>Main specs</th>
                </tr>
                <tr>
                  <td>Capacity</td>
                  <td>256 Gb</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Space gray</td>
                </tr>
                <tr>
                  <td>Size and weight</td>
                  <td>
                    Height: 5.65 inches (143.6 mm)<br />
                    Width: 2.79 inches (70.9 mm)<br />
                    Depth: 0.30 inch (7.7 mm)<br />
                    Weight: 6.14 ounces (174 grams)
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>Other</th>
                </tr>
                <tr>
                  <td>Splash, Water, and Dust Resistant</td>
                  <td>Rated IP67 under IEC standard 60529</td>
                </tr>
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
      <FeaturedProducts items={[1, 2, 3]} />
    </div>
  </div>
);

export default CatalogDetail;
