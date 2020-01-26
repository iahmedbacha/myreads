import React from 'react';
import PropTypes from 'prop-types';

const BookAuthors = props => {
  const { authors } = props;
  return <div className="book-authors">{authors.join(', ')}</div>;
};

BookAuthors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string)
};

BookAuthors.defaultProps = {
  authors: []
};

export default BookAuthors;
