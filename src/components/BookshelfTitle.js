import React from 'react';
import PropTypes from 'prop-types';

const BookshelfTitle = props => {
  const { title } = props;
  return <h2 className="bookshelf-title">{title}</h2>;
};

BookshelfTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default BookshelfTitle;
