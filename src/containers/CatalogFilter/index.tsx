import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchFiltersByCategory, passFilters } from '../../actions';

import './styles.css';

interface ICatalogFilterProps {
  match: any,
  history: any,
  products: any,
  filters: any,
  passFilters: any,
  fetchFiltersByCategory: any,
}

interface ICatalogFilterState {
  filterProps: object,
  priceFrom: string,
  priceTo: string,
}

// tslint:disable-next-line
interface CatalogFilter {
  category: string,
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

    this.category = this.props.match.params.cat;
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
    this.props.fetchFiltersByCategory(this.category);

    this.props.history.listen(() => {
      const path = this.props.history.location.pathname;
      this.category = path.split('/')[2];
      this.props.fetchFiltersByCategory(this.category);
      this.props.passFilters({});
    });
  }

  private getFilterFields(
      title: string,
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
      title: string,
      name: string, 
      field_type: string, 
      variants: [], 
      options: { min: string, max: string } 
    }) {
    const fields = this.getFilterFields(
      filter.title,
      filter.name, 
      filter.field_type, 
      filter.variants, 
      filter.options
    );

    return (
      <div className="catalog-filter__section" key={filter.name}>
        <div>{filter.title}:</div>
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

  private handlePropertyCheck(e: any) {
    const check = e.target;
    const opts = Object.assign({}, this.options);

    if (check.checked) {
      if ( !opts[check.name] ) {
        opts[check.name] = [];
      }

      opts[check.name].push(check.value);
    } else {
      if ( opts[check.name] ) {
        const i = opts[check.name].indexOf(check.value);
        opts[check.name].splice(i, 1);
      }
    }

    this.options = opts;

    this.props.passFilters(opts);
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

    this.props.passFilters(this.options);
  }
}

function mapStateToProps(state: any) {
  return {
    filters: state.filters.data,
    // ...state.products,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchFiltersByCategory: (filterCategory: string) => dispatch(fetchFiltersByCategory(filterCategory)),
    passFilters: (filterOptions: {}) => dispatch(passFilters(filterOptions)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CatalogFilter));
