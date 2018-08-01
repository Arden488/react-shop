import createHistory from 'history/createBrowserHistory';
import * as React from 'react';

const history = createHistory();

interface ICatalogDetailProps {
  match: any,
}

const CatalogDetail: React.SFC<ICatalogDetailProps> = props => (
  <div>
    <button onClick={history.goBack}>Назад</button>
    <h1>{props.match.params.code}</h1>
    ...
  </div>
);

export default CatalogDetail;
