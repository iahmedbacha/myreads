import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBooksBar
          handleCloseSearch={this.props.handleCloseSearch}
          searchBooksInputValue={this.props.searchBooksInputValue}
          handleSearchBooksInputOnChange={this.props.handleSearchBooksInputOnChange}
        />
        <SearchBooksResults
          books={this.props.books}
          handleBookShelfOnChange={this.props.handleBookShelfOnChange}
        />
      </div>
    );
  };
};

export default SearchBooks;
