import React from 'react';

const BookAuthors = (props) => (
  <div className="book-authors">{props.authors.join(', ')}</div>
);

export default BookAuthors;
