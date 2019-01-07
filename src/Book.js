import React, { Component } from "react";
import MoveBook from "./MoveBook";

class Book extends Component {
  render() {
    const { book, handleChange } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          {typeof book.imageLinks !== "undefined" && (
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
              }}
            />
          )}
          <MoveBook book={book} handleChange={handleChange} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {typeof book.authors !== "undefined" &&
            book.authors.map(author => <div key={author}>{author}</div>)}
        </div>
      </div>
    );
  }
}

export default Book;
