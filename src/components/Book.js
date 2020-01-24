import React from 'react';
import BookTop from './BookTop';
import BookTitle from './BookTitle';
import BookAuthors from './BookAuthors';

const Book = (props) => (
  <li>
    <div className="book">
      <BookTop thumbnail={props.book.imageLinks.thumbnail} />
      <BookTitle title={props.book.title} />
      <BookAuthors authors={props.book.authors} />
    </div>
  </li>
);

export default Book;
