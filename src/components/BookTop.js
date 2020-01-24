import React from 'react';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';

const BookTop = (props) => (
  <div className="book-top">
    <BookCover />
    <BookShelfChanger />
  </div>
);

export default BookTop;
