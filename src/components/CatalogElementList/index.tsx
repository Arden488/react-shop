import * as React from 'react';

import CatalogElementListItem from '../CatalogElementListItem';

import './styles.css';

interface ICatalogElementListProps {
  items: Array<{ id: number, article: number, image: string, price: string, title: string }>
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
  
  private renderListItem(item: { id: number, article: number, image: string, price: string, title: string }) {
    return <CatalogElementListItem {...item} key={item.article} />;
  }
}

export default CatalogElementList;
