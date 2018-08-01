import * as React from 'react';

import CatalogElementListItem from '../CatalogElementListItem';

import './styles.css';

class CatalogElementList extends React.Component<any, any> {
  public render() {
    const items = [1, 2, 3, 4, 5].map(item => this.renderListItem(item));

    return (
      <div className="product-list">
        {items}
      </div>
    );
  }
  
  private renderListItem(item: React.ReactNode) {
    return <CatalogElementListItem code="1" />;
  }
}

export default CatalogElementList;
