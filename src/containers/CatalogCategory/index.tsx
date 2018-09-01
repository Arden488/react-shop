import * as React from 'react';
import { connect } from 'react-redux';

import { fetchProductsByCategory } from '../../actions/index';

import CatalogElementList from '../../components/CatalogElementList';
import CatalogSort from '../../components/CatalogSort';
import CatalogFilter from '../CatalogFilter';

import './styles.css';

interface ICatalogCategoryProps {
  match: any,
  fetchProductsByCategory: any,
  products: any,
}

// tslint:disable-next-line
interface CatalogCategory {
  category: string,
}

class CatalogCategory extends React.Component<ICatalogCategoryProps> {
  constructor(props: any) {
    super(props);

    this.category = this.props.match.params.cat;
  }

  public render() {
    return (
      <div>
        <h1>{this.category}</h1>
        <div className="catalog-category-wrapper">
          <div className="catalog-category__aside">
            <CatalogFilter />
          </div>
          <div className="catalog-category__content">
            <CatalogSort />
            <CatalogElementList items={this.props.products.items || []} />
          </div>
        </div>
      </div>
    )
  }

  public componentDidMount() {
    this.props.fetchProductsByCategory(this.category);
  }

  // public componentDidUpdate() {
  //   this.props.fetchProductsByCategory(this.category);
  // }
}

function mapStateToProps(state: any) {
  return {
    products: state.products,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchProductsByCategory: (category: string) => dispatch(fetchProductsByCategory(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogCategory);
