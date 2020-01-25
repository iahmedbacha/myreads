import React from 'react';
import PropTypes from 'prop-types';

const OpenSearch = (props) => (
  <div className="open-search">
    <button onClick={() => props.handleOpenSearch()}>Add a book</button>
  </div>
);

OpenSearch.prototype = {
  handleOpenSearch: PropTypes.func.isRequired
};

export default OpenSearch;
