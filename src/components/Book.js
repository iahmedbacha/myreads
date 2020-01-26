import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookTop from './BookTop';
import BookTitle from './BookTitle';
import BookAuthors from './BookAuthors';

class Book extends Component {
  static propTypes = {
    book: PropTypes.shape({
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string
      }),
      shelf: PropTypes.string,
      title: PropTypes.string.isRequired,
      authors: PropTypes.array
    }).isRequired,
    handleBookShelfOnChange: PropTypes.func.isRequired
  };

  handleBookShelfOnChange = shelf => {
    const { handleBookShelfOnChange, book } = this.props;
    handleBookShelfOnChange(book, shelf);
  };

  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
          <BookTop
            thumbnail={book.imageLinks && book.imageLinks.thumbnail}
            handleBookShelfOnChange={this.handleBookShelfOnChange}
            shelf={book.shelf}
          />
          <BookTitle title={book.title} />
          <BookAuthors authors={book.authors} />
        </div>
      </li>
    );
  }
}

export default Book;
