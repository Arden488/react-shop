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
  // public static getDerivedStateFromProps(props: ICatalogCategoryProps, state: ICatalogCategoryState ) {
    // if ( props.filter && props.filter !== state.filters ) {
    //   const filteredProducts = props.products.filter((item: object) => {
    //     let included = true;
        
    //     Object.keys(props.filter).forEach((key: string) => {
    //       const fieldName: string = key.replace('filter_', '');
    //       const element = props.filter[key];
    //       if (element.length > 0 && element.indexOf(item[fieldName]) === -1) {
    //         included = false;
    //       }
    //     });
        
    //     return included;
    //   });

    //   return {
    //     filters: props.filter,
    //     products: filteredProducts,
    //   };
    // }

  //   console.log(props.filter);
  //   console.log(state.filters);

  //   if (props.filter) {
  //     return {
  //       filters: props.filter,
  //     };
  //   }

  //   if (props.products) {
  //     return {
  //       products: props.products,
  //     };
  //   }

  //   return null;
  // }

  constructor(props: any) {
    super(props);

    // this.state = {
    //   filters: {},
    //   products: [],
    // }
    this.category = this.props.match.params.cat;
  }

  public render() {
    console.log(this.props.filters);
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
    return items.filter((item: object) => {
      let included = true;
      
      Object.keys(options).forEach((key: string) => {
        const element = options[key];
        const fieldName: string = key.replace('filter_', '');

        if (element.length > 0) {
          if (element.indexOf(item[fieldName]) === -1) {
            included = false;
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
