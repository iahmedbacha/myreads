import React from 'react';
import PropTypes from 'prop-types';

const BookTitle = props => {
  const { title } = props;
  return <div className="book-title">{title}</div>;
};

BookTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default BookTitle;
