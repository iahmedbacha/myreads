import React from 'react';
import BooksGrid from './BooksGrid';

const SearchBooksResults = (props) => (
  <div className="search-books-results">
    <BooksGrid
      books={props.books}
      handleBookShelfOnChange={props.handleBookShelfOnChange}
    />
  </div>
);

export default SearchBooksResults;
