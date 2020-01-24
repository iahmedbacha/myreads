import React from 'react';
import Book from './Book';

const BooksGrid = (props) => (
  <ol className="books-grid">
    <li>
      <Book />
    </li>
    <li>
      <Book />
    </li>
  </ol>
);

export default BooksGrid;
