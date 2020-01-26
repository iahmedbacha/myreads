import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CloseSearch extends Component {
  static propTypes = {
    handleCloseSearch: PropTypes.func.isRequired
  };

  handleCloseSearch = () => {
    const { handleCloseSearch } = this.props;
    handleCloseSearch();
  };

  render() {
    return (
      <Link to={`${process.env.PUBLIC_URL}/`}>
        <button
          type="button"
          className="close-search"
          onClick={this.handleCloseSearch}
        >
          Close
        </button>
      </Link>
    );
  }
}

export default CloseSearch;
