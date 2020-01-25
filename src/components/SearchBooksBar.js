import React from 'react';
import PropTypes from 'prop-types';
import CloseSearch from './CloseSearch';
import SearchBooksInputWrapper from './SearchBooksInputWrapper';

const SearchBooksBar = (props) => (
  <div className="search-books-bar">
    <CloseSearch handleCloseSearch={props.handleCloseSearch} />
    <SearchBooksInputWrapper
      searchBooksInputValue={props.searchBooksInputValue}
      handleSearchBooksInputOnChange={props.handleSearchBooksInputOnChange}
    />
  </div>
);

SearchBooksBar.propTypes = {
  handleCloseSearch: PropTypes.func.isRequired, 
  searchBooksInputValue: PropTypes.string.isRequired,
  handleSearchBooksInputOnChange: PropTypes.func.isRequired
};

export default SearchBooksBar;
