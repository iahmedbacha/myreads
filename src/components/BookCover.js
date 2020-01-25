import React from 'react';
import PropTypes from 'prop-types';

const BookCover = (props) => (
  <div
    className="book-cover"
    style={{
      width: 128,
      height: 193,
      backgroundImage: `url("${props.thumbnail}")`
    }}>
  </div>
);

BookCover.propTypes = {
  thumbnail: PropTypes.string
};

export default BookCover;
