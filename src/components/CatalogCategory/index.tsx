import * as React from 'react';

import CatalogElementList from '../CatalogElementList';
import CatalogFilter from '../CatalogFilter';
import CatalogSort from '../CatalogSort';

import './styles.css';

interface ICatalogCategoryProps {
  match: any
}

interface ICatalogCategoryState {
  items: [{ id: number, image: string, price: string, title: string }]
}

class CatalogCategory extends React.Component<ICatalogCategoryProps, ICatalogCategoryState> {
  constructor(props: any) {
    super(props);

    this.state = {
      items: [{
        id: 1,
        image: "iphone8_red.webp",
        price: "39990",
        title: "Apple iPhone 8 32 ГБ (PRODUCT)RED",
      }, {
        id: 2,
        image: "iphone8_red.webp",
        price: "49990",
        title: "Apple iPhone 8 64 ГБ (PRODUCT)RED",
      }, {
        id: 3,
        image: "iphone8_red.webp",
        price: "59990",
        title: "Apple iPhone 8 256 ГБ (PRODUCT)RED",
      }]
    }
  }

  public render() {
    return (
      <div>
        <h1>{this.props.match.params.cat}</h1>
        <div className="catalog-category-wrapper">
          <div className="catalog-category__aside">
            <CatalogFilter />
          </div>
          <div className="catalog-category__content">
            <CatalogSort />
            <CatalogElementList items={this.state.items} />
          </div>
        </div>
      </div>
    )
  }
}

export default CatalogCategory;
