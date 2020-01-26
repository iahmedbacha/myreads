import React from 'react';
import PropTypes from 'prop-types';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

const SearchBooks = props => {
  const {
    handleCloseSearch,
    searchBooksInputValue,
    handleSearchBooksInputOnChange,
    books,
    handleBookShelfOnChange
  } = props;
  return (
    <div className="search-books">
      <SearchBooksBar
        handleCloseSearch={handleCloseSearch}
        searchBooksInputValue={searchBooksInputValue}
        handleSearchBooksInputOnChange={handleSearchBooksInputOnChange}
      />
      <SearchBooksResults
        books={books}
        handleBookShelfOnChange={handleBookShelfOnChange}
      />
    </div>
  );
};

SearchBooks.propTypes = {
  handleCloseSearch: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchBooksInputValue: PropTypes.string.isRequired,
  handleSearchBooksInputOnChange: PropTypes.func.isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired
};

export default SearchBooks;
