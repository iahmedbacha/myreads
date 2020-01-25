import React from 'react';
import PropTypes from 'prop-types';
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

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired
};

export default BooksGrid;
