import React from 'react';
import Bookshelf from './Bookshelf';

const ListBooksContent = (props) => (
  <div className="list-books-content">
    <div>
      <Bookshelf title='Currently Reading' />
      <Bookshelf title='Want to Read' />
      <Bookshelf title='Read' />
    </div>
  </div>
);

export default ListBooksContent;
