import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksGrid = props => {
  const { books } = props;
  return (
    <ol className="books-grid">
      {books.map(book => (
        <Book
          key={book.id}
          book={book}
          handleBookShelfOnChange={props.handleBookShelfOnChange}
        />
      ))}
    </ol>
  );
};

BooksGrid.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ).isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired
};

export default BooksGrid;
