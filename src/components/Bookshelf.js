import React from 'react';
import BookshelfTitle from './BookshelfTitle';
import BookshelfBooks from './BookshelfBooks';

const Bookshelf = (props) => (
  <div className="bookshelf">
    <BookshelfTitle title={props.title} />
    <BookshelfBooks
      books={props.books}
      handleBookShelfOnChange={props.handleBookShelfOnChange}
    />
  </div>
);

export default Bookshelf;
