import React from 'react';
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

export default ListBooks;
