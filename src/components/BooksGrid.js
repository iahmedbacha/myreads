import React from 'react';
import Book from './Book';

const BooksGrid = (props) => (
  <ol className="books-grid">
    { props.books.map(book => <Book book={book} />) }
  </ol>
);

export default BooksGrid;
