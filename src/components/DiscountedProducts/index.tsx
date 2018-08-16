import * as React from 'react';

import CatalogElementListItem from '../CatalogElementListItem';

import './styles.css';

interface IDiscountedProductsProps {
  items: number[]
}

class DiscountedProducts extends React.Component<IDiscountedProductsProps> {
  public render() {
    const items = this.props.items.map(item => this.renderListItem(item));

    return (
      <div className="product-list product-list_discounted">
        {items}
      </div>
    );
  }

  private renderListItem(item: number) {
    return <CatalogElementListItem code="1" key={item} />;
  }
}

export default DiscountedProducts;
