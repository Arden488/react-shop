import createHistory from 'history/createBrowserHistory';
import * as React from 'react';

const history = createHistory();

interface INewsDetailProps {
  match: any
}

const NewsDetail: React.SFC<INewsDetailProps> = props => (
  <div>
    <button onClick={history.goBack}>Назад</button>
    <h1>{props.match.params.code}</h1>
    <p>...</p>
  </div>
);

export default NewsDetail;
