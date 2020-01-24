import React from 'react';
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

export default SearchBooksBar;
