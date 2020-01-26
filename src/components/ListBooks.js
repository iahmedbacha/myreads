import React from 'react';
import PropTypes from 'prop-types';
import ListBooksTitle from './ListBooksTitle';
import ListBooksContent from './ListBooksContent';
import OpenSearch from './OpenSearch';

const ListBooks = props => {
  const { title, books, handleBookShelfOnChange } = props;
  return (
    <div className="list-books">
      <ListBooksTitle title={title} />
      <ListBooksContent
        books={books}
        handleBookShelfOnChange={handleBookShelfOnChange}
      />
      <OpenSearch />
    </div>
  );
};

ListBooks.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired
};

export default ListBooks;
