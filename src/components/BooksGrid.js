import React from 'react';
import Book from './Book';

const BooksGrid = (props) => (
  <ol className="books-grid">
    { props.books.map(book =>
        <Book
          key={book.industryIdentifiers.filter(industryIdentifier => industryIdentifier.type === 'ISBN_13')[0].identifier}
          book={book}
        />
      )
    }
  </ol>
);

export default BooksGrid;
