import React from 'react';
import Book from './Book';

const BooksGrid = (props) => (
  <ol className="books-grid">
    { props.books.map(book =>
        <Book
          key={book.id}
          book={book}
          handleBookShelfOnChange={props.handleBookShelfOnChange}
        />
      )
    }
  </ol>
);

export default BooksGrid;
