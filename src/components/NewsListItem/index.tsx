import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NewsListItem = props => (
  <div>
    <Link to={`/news/${props.code}`}>{props.title}</Link>
  </div>
);

NewsListItem.propTypes = {
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsListItem;
