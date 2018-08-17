import * as React from 'react';

import CatalogElementListItem from '../CatalogElementListItem';

import './styles.css';

interface IHotProductsProps {
  items: number[]
}

class HotProducts extends React.Component<IHotProductsProps> {
  public render() {
    const items = this.props.items.map(item => this.renderListItem(item));

    return (
      <div className="product-list product-list_featured">
        {items}
      </div>
    );
  }

  private renderListItem(item: number) {
    return <CatalogElementListItem code="1" key={item} />;
  }
}

export default HotProducts;
