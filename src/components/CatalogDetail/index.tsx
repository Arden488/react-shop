import createHistory from 'history/createBrowserHistory';
import * as React from 'react';

const history = createHistory();

interface ICatalogDetailProps {
  match: any,
}

const CatalogDetail: React.SFC<ICatalogDetailProps> = props => (
  <div>
    <button onClick={history.goBack}>Назад</button>
    <div>
      <div>Product gallery</div>
      <div>
        <h1>{props.match.params.code}</h1>
        <p>Some description</p>

        <div>Choose color</div>
        <div>Choose options</div>
        <div>Price and discount</div>
        <div>Buy</div>
        <div>Delivery options</div>
      </div>
      <div>
        Tabs - detailed description / characteristics
      </div>
      <div>Supplementary products</div>
    </div>
  </div>
);

export default CatalogDetail;
