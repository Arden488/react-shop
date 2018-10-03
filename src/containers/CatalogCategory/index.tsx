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
  filters: any,
}

interface ICatalogCategoryState {
  products: any,
  filters: any,
}

// tslint:disable-next-line
interface CatalogCategory {
  category: string,
}

class CatalogCategory extends React.PureComponent<ICatalogCategoryProps, ICatalogCategoryState> {
  constructor(props: any) {
    super(props);

    this.category = this.props.match.params.cat;
  }

  public render() {
    const products = this.filterProducts(this.props.products || [], this.props.filters || {});

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

  private filterProducts(items: [], options: object) {
    return items.filter((item: { price: string }) => {
      let included = true;
      
      Object.keys(options).forEach((key: string) => {
        const element = options[key];

        if (element.length > 0) {
          switch (key) {
            case 'priceFrom':
              if ( parseInt(element, 0) > parseInt(item.price, 0) ) {
                included = false;
              }
              break;
            case 'priceTo':
              if ( parseInt(element, 0) < parseInt(item.price, 0) ) {
                included = false;
              }
              break;
            default:
              if (element.indexOf(item[key]) === -1) {
                included = false;
              }
          }
        }
      });
      
      return included;
    });
  }
}

function mapStateToProps(state: any) {
  return {
    filters: state.productsFilterOptions.data,
    products: state.products.data,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchProductsByCategory: (category: string) => dispatch(fetchProductsByCategory(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogCategory);
