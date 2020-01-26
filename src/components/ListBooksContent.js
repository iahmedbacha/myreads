import React from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

const ListBooksContent = props => {
  const { handleBookShelfOnChange, books } = props;
  return (
    <div className="list-books-content">
      <div>
        <Bookshelf
          title="Currently Reading"
          handleBookShelfOnChange={handleBookShelfOnChange}
          books={books.filter(book => book.shelf === 'currentlyReading')}
        />
        <Bookshelf
          title="Want to Read"
          handleBookShelfOnChange={handleBookShelfOnChange}
          books={books.filter(book => book.shelf === 'wantToRead')}
        />
        <Bookshelf
          title="Read"
          handleBookShelfOnChange={handleBookShelfOnChange}
          books={books.filter(book => book.shelf === 'read')}
        />
      </div>
    </div>
  );
};

ListBooksContent.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired
};

export default ListBooksContent;
