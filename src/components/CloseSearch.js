import React from 'react';
import PropTypes from 'prop-types';

const CloseSearch = (props) => (
  <button className="close-search" onClick={() => props.handleCloseSearch()}>Close</button>
);

CloseSearch.propTypes = {
  handleCloseSearch: PropTypes.func.isRequired
};

export default CloseSearch;
