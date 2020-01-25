import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

const BookshelfBooks = (props) => (
  <BooksGrid
    books={props.books}
    handleBookShelfOnChange={props.handleBookShelfOnChange}
  />
);

BookshelfBooks.propTypes = {
  books: PropTypes.array.isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired
};

export default BookshelfBooks;
