import React from 'react';
import PropTypes from 'prop-types';

const BookshelfTitle = (props) => (
  <h2 className="bookshelf-title">{props.title}</h2>
);

BookshelfTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default BookshelfTitle;
