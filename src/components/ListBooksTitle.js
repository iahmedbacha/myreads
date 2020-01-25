import React from 'react';
import PropTypes from 'prop-types';

const ListBooksTitle = (props) => (
  <div className="list-books-title">
    <h1>{props.title}</h1>
  </div>
);

ListBooksTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default ListBooksTitle;
