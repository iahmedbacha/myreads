import React from 'react';

const CloseSearch = (props) => (
  <button className="close-search" onClick={() => props.handleCloseSearch()}>Close</button>
);

export default CloseSearch;
