import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

const SearchBooksResults = (props) => (
  <div className="search-books-results">
    <BooksGrid
      books={props.books}
      handleBookShelfOnChange={props.handleBookShelfOnChange}
    />
  </div>
);

SearchBooksResults.propTypes = {
  books: PropTypes.array.isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired
};

export default SearchBooksResults;
