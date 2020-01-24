import React from 'react';
import CloseSearch from './CloseSearch';
import SearchBooksInputWrapper from './SearchBooksInputWrapper';

const SearchBooksBar = (props) => (
  <div className="search-books-bar">
    <CloseSearch handleCloseSearch={props.handleCloseSearch} />
    <SearchBooksInputWrapper />
  </div>
);

export default SearchBooksBar;
