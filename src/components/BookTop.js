import React from 'react';
import PropTypes from 'prop-types';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';

const BookTop = props => {
  const { thumbnail, handleBookShelfOnChange, shelf } = props;
  return (
    <div className="book-top">
      <BookCover thumbnail={thumbnail} />
      <BookShelfChanger
        handleBookShelfOnChange={handleBookShelfOnChange}
        shelf={shelf}
      />
    </div>
  );
};

BookTop.propTypes = {
  thumbnail: PropTypes.string,
  handleBookShelfOnChange: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired
};

BookTop.defaultProps = {
  thumbnail: ''
};

export default BookTop;
