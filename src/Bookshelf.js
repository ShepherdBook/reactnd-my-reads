import React, { Component } from "react";
import BookList from "./BookList";
import { Link } from "react-router-dom";

class Bookshelf extends Component {
  render() {
    const { books, handleChange } = this.props;
    const currentlyReadingBooks = books.filter(book => book.shelf === "currentlyReading");
    const wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    const readBooks = books.filter(book => book.shelf === "read");

    return (
      <div>
        <header className="list-books-title">
          <h1>my-reads</h1>
        </header>

        <BookList title={"Currently Reading"} books={currentlyReadingBooks} handleChange={handleChange} />
        <BookList title={"Want to Read"} books={wantToReadBooks} handleChange={handleChange} />
        <BookList title={"Read"} books={readBooks} handleChange={handleChange} />

        <Link to="/search" className="open-search">
          <button>Open Search</button>
        </Link>
      </div>
    );
  }
}

export default Bookshelf;
