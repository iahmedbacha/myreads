import React from 'react';
import BooksGrid from './BooksGrid';

const BookshelfBooks = (props) => (
  <BooksGrid books={props.books} />
);

export default BookshelfBooks;
