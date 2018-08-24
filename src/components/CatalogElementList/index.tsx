import * as React from 'react';

import CatalogElementListItem from '../CatalogElementListItem';

import './styles.css';

interface Item {
  id: number,
  image: string,
  title: string,
  price: string
}

interface ICatalogElementListProps {
  items: [Item]
}

class CatalogElementList extends React.Component<ICatalogElementListProps> {
  public render() {
    const items = this.props.items.map(item => this.renderListItem(item));

    return (
      <div className="product-list">
        {items}
      </div>
    );
  }
  
  private renderListItem(item: number) {
    return <CatalogElementListItem code="1" key={item} />;
  }
}

export default CatalogElementList;
