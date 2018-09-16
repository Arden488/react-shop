import * as React from 'react';
import { connect } from 'react-redux';

import { fetchFiltersByCategory, filterProducts } from '../../actions';

import './styles.css';

interface ICatalogFilterProps {
  products: any,
  filters: any,
  filterProducts: any,
  fetchFiltersByCategory: any,
}

interface ICatalogFilterState {
  filterProps: object,
  priceFrom: string,
  priceTo: string,
}

// tslint:disable-next-line
interface CatalogFilter {
  options: {
    priceTo?: string,
    priceFrom?: string,
  },
}

class CatalogFilter extends React.Component<ICatalogFilterProps, ICatalogFilterState> {
  constructor(props: any) {
    super(props);

    this.options = {};
    this.handlePropertyPriceRange = this.handlePropertyPriceRange.bind(this);
    this.handlePropertyCheck = this.handlePropertyCheck.bind(this);

    this.state = {
      filterProps: {},
      priceFrom: '0',
      priceTo: '1000',
    }
  }

  public render() {
    const filters = this.props.filters;
    const filterSections = this.outputFilters(filters);
    
    return (
      <div>
        {filterSections}
      </div>
    )
  }

  public componentDidMount() {
    this.props.fetchFiltersByCategory('ipad');
  }

  private getFilterFields(
      name: string,
      fieldType: string, 
      variants: [] = [], 
      options: { min: string, max: string } = { max: '', min: '' }
    ) {
    switch (fieldType) {
      case 'checkbox':
        return this.outputCheckboxes(name, variants);
      case 'range':
        return this.outputRange(name, options);
      default:
        return '';
    }
  }

  private getFilterSection(filter: { 
      name: string, 
      field_type: string, 
      variants: [], 
      options: { min: string, max: string } 
    }) {
    const fields = this.getFilterFields(filter.name, filter.field_type, filter.variants, filter.options);

    return (
      <div className="catalog-filter__section">
        <div>{filter.name}:</div>
        <div>
          {fields}
        </div>
      </div>
    )
  }

  private outputCheckboxes(name: string, variants: []) {
    const checkboxes = variants.map((item: string) => {
      return (
        <div key={item}>
          <input 
            type="checkbox" 
            value={item} 
            onChange={this.handlePropertyCheck} 
            className="products-filter-property" 
            name={name} /> 
          {item}
        </div>
      )
    });

    return checkboxes;
  }

  private outputFilters(filters: []) {
    const filterSections = [];

    for (const prop in filters) {
      if (filters.hasOwnProperty(prop)) {
        const params = filters[prop];
        filterSections.push(this.getFilterSection(params));
      }
    }

    return filterSections;
  }

  private outputRange(name: string, options: { min: string, max: string }) {
    return (
      <div>
        From $
        <input 
          type="text" 
          className="products-filter-property products-filter-price-from"
          name={`{name}[]`}
          value={options.min} 
          onChange={this.handlePropertyPriceRange}
          size={4} /> 
        to $
        <input 
          type="text" 
          className="products-filter-property products-filter-price-to"
          name={`{name}[]`}
          value={options.max}
          onChange={this.handlePropertyPriceRange}
          size={4} />
      </div>
    )
  }

  private handlePropertyCheck() {
    const checks = document.querySelectorAll('input[type="checkbox"].products-filter-property');

    checks.forEach((el: any) => {
      if (el.checked) {
        if ( !this.options[el.name] ) {
          this.options[el.name] = [];
        }
        if ( this.options[el.name].indexOf(el.value) === -1) {
          this.options[el.name].push(el.value);
        }
      }
    });

    this.props.filterProducts(this.options);
  }

  private handlePropertyPriceRange() {
    const from = (document.querySelector('.products-filter-price-from') as HTMLInputElement);
    const to = (document.querySelector('.products-filter-price-to') as HTMLInputElement);

    if (to && to.value !== '') {
      this.options.priceTo = to.value;
      this.setState({ priceTo: to.value });
    }

    if (from && from.value !== '') {
      this.options.priceFrom = from.value;
      this.setState({ priceFrom: from.value });
    }

    this.props.filterProducts(this.options);
  }
}

function mapStateToProps(state: any) {
  return {
    filters: state.filters,
    products: state.products,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchFiltersByCategory: (filterCategory: string) => dispatch(fetchFiltersByCategory(filterCategory)),
    filterProducts: (filterOptions: {}) => dispatch(filterProducts(filterOptions)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogFilter);
