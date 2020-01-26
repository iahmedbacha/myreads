import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

const BookshelfBooks = props => {
  const { books, handleBookShelfOnChange } = props;
  return (
    <BooksGrid
      books={books}
      handleBookShelfOnChange={handleBookShelfOnChange}
    />
  );
};

BookshelfBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired
};

export default BookshelfBooks;
