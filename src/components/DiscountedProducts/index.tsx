import * as React from 'react';

import CatalogElementListItem from '../CatalogElementListItem';

import './styles.css';

interface IDiscountedProductsProps {
  items: Array<{ id: number, image: string, price: string, title: string }>
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

  private renderListItem(item: { id: number, image: string, price: string, title: string }) {
    return <CatalogElementListItem {...item} key={item.id} />;
  }
}

export default DiscountedProducts;
