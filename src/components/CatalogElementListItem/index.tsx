import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface ICatalogElementListItemProps {
  id: number,
  key: number,
  title: string,
  price: string,
  image: string,
}

const CatalogElementListItem: React.SFC<ICatalogElementListItemProps> = props => (
  <div className="product-item">
    <Link className="product-item__link" to={`/product/${props.id}`}>
      <div className="product-item__image"><img src={`/img/${props.image}`} alt={props.title} /></div>
      <div className="product-item__title">{props.title}</div>
      <div className="product-item__controls">
        <div className="product-item__price">{props.price} ₽</div>
        <div className="product-item__buy">
          <button>Купить</button>
        </div>
      </div>
    </Link>
  </div>
);

export default CatalogElementListItem;
