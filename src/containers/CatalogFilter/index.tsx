import * as React from 'react';
import { connect } from 'react-redux';

import { filterProducts } from '../../actions';

import './styles.css';

interface ICatalogFilterProps {
  products: any,
  filterProducts: any,
}

interface ICatalogFilterState {
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
      priceFrom: '0',
      priceTo: '1000',
    }
  }

  public render() {
    return (
      <div>
        <div className="catalog-filter__section">
          <div>Product series:</div>
          <div>
            <input 
              type="checkbox" 
              value="iphonex" 
              onChange={this.handlePropertyCheck} 
              className="products-filter-property" 
              name="filter_type" /> iPhone X<br />
            <input 
              type="checkbox" 
              value="iphone8" 
              onChange={this.handlePropertyCheck} 
              className="products-filter-property" 
              name="filter_type" /> iPhone 8<br />
            <input 
              type="checkbox" 
              value="iphone7" 
              onChange={this.handlePropertyCheck} 
              className="products-filter-property" 
              name="filter_type" /> iPhone 7<br />
            <input 
              type="checkbox" 
              value="iphone6" 
              onChange={this.handlePropertyCheck} 
              className="products-filter-property" 
              name="filter_type" /> iPhone 6<br />
          </div>
        </div>
        <div className="catalog-filter__section">
          <div>Color:</div>
          <div>
            <input 
              type="checkbox"
              className="products-filter-property"
              value="gray_space" 
              onChange={this.handlePropertyCheck}
              name="filter_color" /> Gray space<br />
            <input 
              type="checkbox"
              className="products-filter-property"
              value="black" 
              onChange={this.handlePropertyCheck}
              name="filter_color" /> Black<br />
            <input 
              type="checkbox"
              className="products-filter-property"
              value="gold" 
              onChange={this.handlePropertyCheck}
              name="filter_color" /> Gold<br />
            <input 
              type="checkbox"
              className="products-filter-property"
              onChange={this.handlePropertyCheck}
              value="gold_rose" 
              name="filter_color" /> Gold rose
          </div>
        </div>
        <div className="catalog-filter__section">
          <div>Price range:</div>
          <div>
            From $
            <input 
              type="text" 
              className="products-filter-property products-filter-price-from"
              name="filter_price_from" 
              value={this.state.priceFrom} 
              onChange={this.handlePropertyPriceRange}
              size={4} /> 
            to $
            <input 
              type="text" 
              className="products-filter-property products-filter-price-to"
              name="filter_price_to" 
              value={this.state.priceTo}
              onChange={this.handlePropertyPriceRange}
              size={4} />
          </div>
        </div>
        <div className="catalog-filter__section">
          <div>Screen size:</div>
          <div>
            <input 
              type="checkbox" 
              className="products-filter-property"
              onChange={this.handlePropertyCheck}
              value="4" 
              name="filter_screen_size" /> 4'<br />
            <input 
              type="checkbox" 
              className="products-filter-property"
              onChange={this.handlePropertyCheck}
              value="5" 
              name="filter_screen_size" /> 5'<br />
            <input 
              type="checkbox" 
              className="products-filter-property"
              onChange={this.handlePropertyCheck}
              value="6" 
              name="filter_screen_size" /> 6'
          </div>
        </div>
        <div className="catalog-filter__section">
          <div>Memory size:</div>
          <div>
            <input 
              type="checkbox" 
              className="products-filter-property"
              onChange={this.handlePropertyCheck}
              value="16" 
              name="filter_memory_size" /> 16 Gb<br />
            <input 
              type="checkbox" 
              className="products-filter-property"
              onChange={this.handlePropertyCheck}
              value="32" 
              name="filter_memory_size" /> 32 Gb<br />
            <input 
              type="checkbox" 
              className="products-filter-property"
              onChange={this.handlePropertyCheck}
              value="64" 
              name="filter_memory_size" /> 64 Gb<br />
            <input 
              type="checkbox" 
              className="products-filter-property"
              onChange={this.handlePropertyCheck}
              value="128" 
              name="filter_memory_size" /> 128 Gb<br />
            <input 
              type="checkbox" 
              className="products-filter-property"
              onChange={this.handlePropertyCheck}
              value="256" 
              name="filter_memory_size" /> 256 Gb
          </div>
        </div>
        <div className="catalog-filter__section">
          <div>Release year:</div>
          <div>
            <div>
              <input 
                type="checkbox" 
                className="products-filter-property"
                onChange={this.handlePropertyCheck}
                value="2012" 
                name="filter_year" /> 2012<br />
              <input 
                type="checkbox" 
                className="products-filter-property"
                onChange={this.handlePropertyCheck}
                value="2011" 
                name="filter_year" /> 2011<br />
              <input 
                type="checkbox" 
                className="products-filter-property"
                onChange={this.handlePropertyCheck}
                value="2010" 
                name="filter_year" /> 2010<br />
              <input 
                type="checkbox" 
                className="products-filter-property"
                onChange={this.handlePropertyCheck}
                value="2009" 
                name="filter_year" /> 2009<br />
              <input 
                type="checkbox" 
                className="products-filter-property"
                onChange={this.handlePropertyCheck}
                value="2008" 
                name="filter_year" /> 2008
            </div>
            <a href="#">more</a>
          </div>
        </div>
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
        this.options[el.name].push(el.value);
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
    products: state.products,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    filterProducts: (filterOptions: {}) => dispatch(filterProducts(filterOptions)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogFilter);
