import React from 'react';

const OpenSearch = (props) => (
  <div className="open-search">
    <button onClick={() => props.handleOpenSearch()}>Add a book</button>
  </div>
);

export default OpenSearch;
