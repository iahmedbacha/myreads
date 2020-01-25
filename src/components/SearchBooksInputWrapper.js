import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBooksInputWrapper extends Component {
  static propTypes = {
    searchBooksInputValue: PropTypes.string.isRequired,
    handleSearchBooksInputOnChange: PropTypes.func.isRequired
  };

  handleSearchBooksInputOnChange = (event) => {
    this.props.handleSearchBooksInputOnChange(event.target.value);
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input
          type="text"
          placeholder="Search by title or author"
          value={this.props.searchBooksInputValue}
          onChange={this.handleSearchBooksInputOnChange}
        />
      </div>
    );
  };
};

export default SearchBooksInputWrapper;
