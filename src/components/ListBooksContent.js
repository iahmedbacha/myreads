import React from 'react';
import Bookshelf from './Bookshelf';

const ListBooksContent = (props) => (
  <div className="list-books-content">
    <div>
      <Bookshelf
        title='Currently Reading'
        books={props.books.filter(book => book.shelf === 'currentlyReading')}
      />
      <Bookshelf
        title='Want to Read'
        books={props.books.filter(book => book.shelf === 'wantToRead')}
      />
      <Bookshelf
        title='Read'
        books={props.books.filter(book => book.shelf === 'read')}
      />
    </div>
  </div>
);

export default ListBooksContent;
