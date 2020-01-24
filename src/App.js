import React from 'react';
// import * as BooksAPI from './utils/BooksAPI';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  handleOpenSearch = () => {
    this.setState({ showSearchPage: true });
  };

  handleCloseSearch = () => {
    this.setState({ showSearchPage: false });
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks handleCloseSearch={this.handleCloseSearch} />
        ) : (
          <ListBooks title='MyReads' handleOpenSearch={this.handleOpenSearch} />
        )}
      </div>
    )
  }
}

export default BooksApp;
