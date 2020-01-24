import React from 'react';
import BooksGrid from './BooksGrid';

const BookshelfBooks = (props) => (
  <BooksGrid
    books={props.books}
    handleBookShelfOnChange={props.handleBookShelfOnChange}
  />
);

export default BookshelfBooks;
