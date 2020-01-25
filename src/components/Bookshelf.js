import React from 'react';
import PropTypes from 'prop-types';
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

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default Bookshelf;
