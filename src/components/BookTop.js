import React from 'react';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';

const BookTop = (props) => (
  <div className="book-top">
    <BookCover thumbnail={props.thumbnail} />
    <BookShelfChanger
      handleBookShelfOnChange={props.handleBookShelfOnChange}
      shelf={props.shelf}
    />
  </div>
);

export default BookTop;
