import React, { Component } from 'react';
import BookTop from './BookTop';
import BookTitle from './BookTitle';
import BookAuthors from './BookAuthors';

class Book extends Component {
  handleBookShelfOnChange = (shelf) => {
    this.props.handleBookShelfOnChange(this.props.book, shelf);
  };

  render() {
    return (
      <li>
        <div className="book">
          <BookTop
            thumbnail={this.props.book.imageLinks.thumbnail}
            handleBookShelfOnChange={this.handleBookShelfOnChange}
            shelf={this.props.book.shelf}
          />
          <BookTitle title={this.props.book.title} />
          <BookAuthors authors={this.props.book.authors} />
        </div>
      </li>
    );
  };
};

export default Book;
