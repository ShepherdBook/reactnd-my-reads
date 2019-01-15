import React, { Component } from "react";
import BookList from "./BookList";
import { Link } from "react-router-dom";

class Bookshelf extends Component {
  render() {
    const { books, handleChange } = this.props;

    const shelves = [];

    shelves.push({
      title: "Currently Reading",
      books: books.filter(book => book.shelf === "currentlyReading")
    });
    shelves.push({
      title: "Want To Read",
      books: books.filter(book => book.shelf === "wantToRead")
    });
    shelves.push({
      title: "Read",
      books: books.filter(book => book.shelf === "read")
    });

    return (
      <div>
        <header className="list-books-title">
          <h1>my-reads</h1>
        </header>

        {shelves.map((shelf, i) => <BookList key={i} title={shelf.title} books={shelf.books} handleChange={handleChange} />)}

        <Link to="/search" className="open-search">
          <button>Open Search</button>
        </Link>
      </div>
    );
  }
}

export default Bookshelf;
