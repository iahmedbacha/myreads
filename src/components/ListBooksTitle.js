import React from 'react';
import PropTypes from 'prop-types';

const ListBooksTitle = props => {
  const { title } = props;
  return (
    <div className="list-books-title">
      <h1>{title}</h1>
    </div>
  );
};

ListBooksTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default ListBooksTitle;
