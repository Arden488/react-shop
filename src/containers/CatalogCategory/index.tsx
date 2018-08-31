import * as React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../actions/index';

import CatalogElementList from '../../components/CatalogElementList';
import CatalogSort from '../../components/CatalogSort';
import CatalogFilter from '../CatalogFilter';

import './styles.css';

interface ICatalogCategoryProps {
  match: any,
  fetchProducts: any,
  products: any,
}

class CatalogCategory extends React.Component<ICatalogCategoryProps> {
  constructor(props: any) {
    super(props);
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
            <CatalogElementList items={this.props.products[this.props.match.params.cat] || []} />
          </div>
        </div>
      </div>
    )
  }

  public componentDidMount() {
    this.props.fetchProducts();
  }
}

function mapStateToProps(state: any) {
  return {
    products: state.products,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogCategory);
