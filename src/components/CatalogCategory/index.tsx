import axios from 'axios';
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
    axios
      .get('http://localhost:3004/products')
      .then(response => {
        this.setState({
          items: response.data
        });
      });
  }
}

export default CatalogCategory;
