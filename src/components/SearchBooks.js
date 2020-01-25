import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends Component {
  static propTypes = {
    handleCloseSearch: PropTypes.func.isRequired, 
    books: PropTypes.array.isRequired,
    searchBooksInputValue: PropTypes.string.isRequired,
    handleSearchBooksInputOnChange: PropTypes.func.isRequired,
    handleBookShelfOnChange: PropTypes.func.isRequired
  };

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
