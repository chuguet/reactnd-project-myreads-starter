import React, { Component } from 'react';

import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
  render() {
    const {book} = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <BookShelfChanger
            changeShelfBook={this.props.changeShelfBook}
            book={book}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
    )
  }
}

export default Book