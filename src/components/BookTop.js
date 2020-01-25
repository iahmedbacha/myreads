import React from 'react';
import PropTypes from 'prop-types';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';

const BookTop = (props) => (
  <div className="book-top">
    <BookCover thumbnail={props.thumbnail} />
    <BookShelfChanger
      handleBookShelfOnChange={props.handleBookShelfOnChange}
      shelf={props.shelf}
    />
  </div>
);

BookTop.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired
};

export default BookTop;
