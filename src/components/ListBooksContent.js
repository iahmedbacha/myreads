import React from 'react';
import Bookshelf from './Bookshelf';

const ListBooksContent = (props) => (
  <div className="list-books-content">
    <div>
      <Bookshelf
        title='Currently Reading'
        handleBookShelfOnChange={props.handleBookShelfOnChange}
        books={props.books.filter(book => book.shelf === 'currentlyReading')}
      />
      <Bookshelf
        title='Want to Read'
        handleBookShelfOnChange={props.handleBookShelfOnChange}
        books={props.books.filter(book => book.shelf === 'wantToRead')}
      />
      <Bookshelf
        title='Read'
        handleBookShelfOnChange={props.handleBookShelfOnChange}
        books={props.books.filter(book => book.shelf === 'read')}
      />
    </div>
  </div>
);

export default ListBooksContent;
