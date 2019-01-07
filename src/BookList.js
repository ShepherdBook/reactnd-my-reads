import React, { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  render() {
    const { title, books } = this.props;

    return (
      <div>
        <header className="bookshelf-title">
          <h2>{title}</h2>
        </header>
        <ul className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
