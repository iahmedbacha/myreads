import React from 'react';
import PropTypes from 'prop-types';

const BookAuthors = (props) => (
  <div className="book-authors">{props.authors && props.authors.join(', ')}</div>
);

BookAuthors.propTypes = {
  authors: PropTypes.array
};

export default BookAuthors;
