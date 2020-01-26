import React from 'react';
import PropTypes from 'prop-types';
import CloseSearch from './CloseSearch';
import SearchBooksInputWrapper from './SearchBooksInputWrapper';

const SearchBooksBar = props => {
  const {
    handleCloseSearch,
    searchBooksInputValue,
    handleSearchBooksInputOnChange
  } = props;
  return (
    <div className="search-books-bar">
      <CloseSearch handleCloseSearch={handleCloseSearch} />
      <SearchBooksInputWrapper
        searchBooksInputValue={searchBooksInputValue}
        handleSearchBooksInputOnChange={handleSearchBooksInputOnChange}
      />
    </div>
  );
};

SearchBooksBar.propTypes = {
  handleCloseSearch: PropTypes.func.isRequired,
  searchBooksInputValue: PropTypes.string.isRequired,
  handleSearchBooksInputOnChange: PropTypes.func.isRequired
};

export default SearchBooksBar;
