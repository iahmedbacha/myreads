import React from 'react';
import PropTypes from 'prop-types';
import ListBooksTitle from './ListBooksTitle';
import ListBooksContent from './ListBooksContent';
import OpenSearch from './OpenSearch';

const ListBooks = (props) => (
  <div className="list-books">
    <ListBooksTitle title={props.title} />
    <ListBooksContent
      books={props.books}
      handleBookShelfOnChange={props.handleBookShelfOnChange}
    />
    <OpenSearch handleOpenSearch={props.handleOpenSearch} />
  </div>
);

ListBooks.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleBookShelfOnChange: PropTypes.func.isRequired,
  handleOpenSearch: PropTypes.func.isRequired,
};

export default ListBooks;
