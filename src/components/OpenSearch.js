import React from 'react';
import { Link } from 'react-router-dom';

const OpenSearch = () => (
  <div className="open-search">
    <Link to={`${process.env.PUBLIC_URL}/search`}>
      <button type="button">Add a book</button>
    </Link>
  </div>
);

export default OpenSearch;
