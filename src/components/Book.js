import React from 'react';
import BookTop from './BookTop';
import BookTitle from './BookTitle';
import BookAuthors from './BookAuthors';

const Book = (props) => (
  <li>
    <div className="book">
      <BookTop />
      <BookTitle />
      <BookAuthors />
    </div>
  </li>
);

export default Book;
