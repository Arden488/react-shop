import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface INewListItemProps {
  code: string,
  title: string
}

const NewsListItem: React.SFC<INewListItemProps> = props => (
  <div>
    <Link to={`/news/${props.code}`}>{props.title}</Link>
  </div>
);

NewsListItem.propTypes = {
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsListItem;
