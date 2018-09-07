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

interface ICatalogCategoryState {
  filteredProducts: any,
}

// tslint:disable-next-line
interface CatalogCategory {
  category: string,
}

class CatalogCategory extends React.Component<ICatalogCategoryProps, ICatalogCategoryState> {
  constructor(props: any) {
    super(props);

    this.state = {
      filteredProducts: []
    }
    this.category = this.props.match.params.cat;
  }

  public render() {
    const products = this.state.filteredProducts.length > 0 ?
      this.state.filteredProducts :
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
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.category = this.props.match.params.cat;
      this.props.fetchProductsByCategory(this.category);
    }
  }

  public componentWillReceiveProps(newProps: any) {
    if ( newProps.filter ) {
      this.setState({
        filteredProducts: this.filterProducts(newProps.products, newProps.filter)
      })
    }
  }

  private filterProducts(items: [], options: object) {
    return items.filter((item: object) => {
      let included = false;
      
      Object.keys(options).forEach((key: string) => {
        const fieldName: string = key.replace('filter_', '');
        const element = options[key];
        if (element.indexOf(item[fieldName]) !== -1) {
          included = true;
        }
      });
      
      return included;
    });
  }
}

function mapStateToProps(state: any) {
  return {
    filter: state.productsFilterOptions,
    products: state.products,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchProductsByCategory: (category: string) => dispatch(fetchProductsByCategory(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogCategory);
