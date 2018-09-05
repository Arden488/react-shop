import * as React from 'react';
import { connect } from 'react-redux';

import { fetchProductsByCategory } from '../../actions/index';

import CatalogElementList from '../../components/CatalogElementList';
import CatalogSort from '../../components/CatalogSort';
import CatalogFilter from '../CatalogFilter';

import './styles.css';

interface ICatalogCategoryProps {
  match: any,
  location: any,
  fetchProductsByCategory: any,
  products: any,
  filter: any,
}

// tslint:disable-next-line
interface CatalogCategory {
  category: string,
  filteredProducts: any,
}

class CatalogCategory extends React.Component<ICatalogCategoryProps> {
  constructor(props: any) {
    super(props);

    this.filteredProducts = [];
    this.category = this.props.match.params.cat;
  }

  public render() {
    const products = this.filteredProducts.length > 0 ?
      this.filteredProducts :
      (this.props.products || []);

    return (
      <div>
        <h1>{this.category}</h1>
        <div className="catalog-category-wrapper">
          <div className="catalog-category__aside">
            <CatalogFilter />
          </div>
          <div className="catalog-category__content">
            <CatalogSort />
            <CatalogElementList items={products} />
          </div>
        </div>
      </div>
    )
  }

  public componentDidMount() {
    this.props.fetchProductsByCategory(this.category);
  }

  public componentDidUpdate(prevProps: any) {
    if (this.props.filter || this.props.filter !== {}) {
      this.filteredProducts = this.filterProducts(this.props.products, this.props.filter);
    }

    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.category = this.props.match.params.cat;
      this.props.fetchProductsByCategory(this.category);
    }
  }

  private filterProducts(items: any, options: any) {
    return items.filter((item: any) => {
      return item.type === 'iphonex';
    });
  }
}

function mapStateToProps(state: any) {
  return {
    filter: state.productsFilter,
    products: state.products,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchProductsByCategory: (category: string) => dispatch(fetchProductsByCategory(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogCategory);
