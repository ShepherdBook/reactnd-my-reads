import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import * as BooksApi from "./BooksAPI";

class Search extends Component {
  state = {
    results: [],
    currentBooks: []
  };

  updateQuery = query => {
    BooksApi.search(query).then(results => {
      this.setState(() => ({
        results: typeof results === "undefined" ? [] : results
      }));
    });
  };

  render() {
    const { books, handleChange } = this.props;
    const booksWithShelf = [];
    // Need to combine books and results so that results are shown on correct shelf

    //foreach book in results
    //if book is in books
    //book is on a shelf
    for (var bookResult of this.state.results) {
      const id = bookResult.id;
      var bookOnShelf = books.find(book => book.id === id);

      if (bookOnShelf != null) {
        bookResult.shelf = bookOnShelf.shelf;
      }

      booksWithShelf.push(bookResult);
    }

    return (
      <div>
        <div className="search-books-bar">
          <form className="search-books-input-wrapper">
            <input
              name="query"
              placeholder="Search"
              type="text"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </form>
        </div>
        <div className="search-books-results">
          <BookList
            title="Results"
            books={booksWithShelf}
            handleChange={handleChange}
          />
          <Link to="/" className="close-search" />
        </div>
      </div>
    );
  }
}

export default Search;
