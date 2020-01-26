import React from 'react';
import PropTypes from 'prop-types';
import BookshelfTitle from './BookshelfTitle';
import BookshelfBooks from './BookshelfBooks';

const Bookshelf = props => {
  const { title, books, handleBookShelfOnChange } = props;
  return (
    <div className="bookshelf">
      <BookshelfTitle title={title} />
      <BookshelfBooks
        books={books}
        handleBookShelfOnChange={handleBookShelfOnChange}
      />
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Bookshelf;
