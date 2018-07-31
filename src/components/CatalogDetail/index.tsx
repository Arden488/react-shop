import React from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const CatalogDetail = props => (
  <div>
    <button onClick={history.goBack}>Назад</button>
    <h1>{props.match.params.code}</h1>
    ...
  </div>
);

CatalogDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      code: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CatalogDetail;
