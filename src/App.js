import React from 'react';
import { Route } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './utils/BooksAPI';
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
    books: [],
    searchBooksInputValue: '',
    searchBooks: []
  };

  searchBooks = debounce(300, searchBooksInputValue => {
    BooksAPI.search(searchBooksInputValue).then(books => {
      if (Array.isArray(books)) {
        this.setState(currentState => {
          return {
            searchBooks: books.map(book => {
              if (currentState.books.filter(b => b.id === book.id).length > 0) {
                return currentState.books.filter(b => b.id === book.id)[0];
              }
              const searchBook = book;
              searchBook.shelf = 'none';
              return searchBook;
            })
          };
        });
      } else {
        this.setState({
          searchBooks: []
        });
      }
    });
  });

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  handleCloseSearch = () => {
    this.setState({
      searchBooksInputValue: '',
      searchBooks: []
    });
  };

  handleBookShelfOnChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      if (
        (res[shelf] && res[shelf].includes(book.id)) ||
        (shelf === 'none' &&
          !res.currentlyReading.includes(book.id) &&
          !res.wantToRead.includes(book.id) &&
          !res.read.includes(book.id))
      ) {
        // update successful
        this.setState(currentState => {
          if (shelf === 'none') {
            return {
              books: currentState.books.filter(b => b.id !== book.id)
            };
          }
          if (currentState.books.filter(b => b.id === book.id).length > 0) {
            return {
              books: currentState.books.map(b => {
                const updateBook = b;
                if (updateBook.id === book.id) {
                  updateBook.shelf = shelf;
                }
                return updateBook;
              })
            };
          }
          const updateBook = book;
          updateBook.shelf = shelf;
          return {
            books: [...currentState.books, updateBook]
          };
        });
      }
    });
  };

  handleSearchBooksInputOnChange = searchBooksInputValue => {
    this.setState({
      searchBooksInputValue
    });
    if (searchBooksInputValue !== '') {
      this.searchBooks(searchBooksInputValue);
    } else {
      this.setState({
        searchBooks: []
      });
    }
  };

  render() {
    const { books, searchBooks, searchBooksInputValue } = this.state;
    return (
      <div className="app">
        <Route exact path="/">
          <ListBooks
            title="MyReads"
            books={books}
            handleOpenSearch={this.handleOpenSearch}
            handleBookShelfOnChange={this.handleBookShelfOnChange}
          />
        </Route>
        <Route path="/search">
          <SearchBooks
            handleCloseSearch={this.handleCloseSearch}
            books={searchBooks}
            searchBooksInputValue={searchBooksInputValue}
            handleSearchBooksInputOnChange={this.handleSearchBooksInputOnChange}
            handleBookShelfOnChange={this.handleBookShelfOnChange}
          />
        </Route>
      </div>
    );
  }
}

export default BooksApp;
