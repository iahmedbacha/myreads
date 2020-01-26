import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

const SearchBooksResults = props => {
  const { books, handleBookShelfOnChange } = props;
  return (
    <div className="search-books-results">
      <BooksGrid
        books={books}
        handleBookShelfOnChange={handleBookShelfOnChange}
      />
    </div>
  );
};

SearchBooksResults.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired
};

export default SearchBooksResults;
