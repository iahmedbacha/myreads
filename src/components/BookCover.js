import React from 'react';
import PropTypes from 'prop-types';

const BookCover = props => {
  const { thumbnail } = props;
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${thumbnail}")`
      }}
    />
  );
};

BookCover.propTypes = {
  thumbnail: PropTypes.string
};

BookCover.defaultProps = {
  thumbnail: ''
};

export default BookCover;
