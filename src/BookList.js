import React, { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  render() {
    const { title, books, handleChange } = this.props;

    return (
      <div>
        <header className="bookshelf-title">
          <h2>{title}</h2>
        </header>
        <ul className="books-grid">
          {books.length > 0 && books.map(book => (
            <li key={book.id}>
              <Book book={book} handleChange={handleChange} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
