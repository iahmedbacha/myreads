import React from 'react';
import PropTypes from 'prop-types';

const BookTitle = (props) => (
  <div className="book-title">{props.title}</div>
);

BookTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default BookTitle;
