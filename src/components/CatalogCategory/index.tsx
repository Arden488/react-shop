import * as React from 'react';

import CatalogElementList from '../CatalogElementList';
import CatalogFilter from '../CatalogFilter';
import CatalogSort from '../CatalogSort';

import './styles.css';

interface ICatalogCategoryProps {
  match: any
}

interface ICatalogCategoryState {
  items: {}
}

class CatalogCategory extends React.Component<ICatalogCategoryProps, ICatalogCategoryState> {
  constructor(props: any) {
    super(props);

    this.state = {
      items: {}
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
            <CatalogElementList items={this.state.items[this.props.match.params.cat] || []} />
          </div>
        </div>
      </div>
    )
  }

  public componentDidMount() {
    this.setState({
      items: {
        accessories: [{
          id: 1,
          image: "iphone8_red.webp",
          price: "5999",
          title: "Bag",
        }, {
          id: 2,
          image: "iphone8_red.webp",
          price: "8999",
          title: "Case",
        }],
        ipad: [{
          id: 1,
          image: "iphone8_red.webp",
          price: "39990",
          title: "Apple iPad 32 ГБ",
        }, {
          id: 2,
          image: "iphone8_red.webp",
          price: "49990",
          title: "Apple iPad 64 ГБ",
        }, {
          id: 3,
          image: "iphone8_red.webp",
          price: "59990",
          title: "Apple iPad 128 ГБ",
        }, {
          id: 3,
          image: "iphone8_red.webp",
          price: "69990",
          title: "Apple iPad 256 ГБ",
        }],
        iphone: [{
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
        }],
        mac: [{
          id: 1,
          image: "iphone8_red.webp",
          price: "139990",
          title: "MacBook 2018",
        }],
      }
    });
  }
}

export default CatalogCategory;
