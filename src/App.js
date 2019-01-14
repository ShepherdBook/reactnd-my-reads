import React, { Component } from "react";
import "./App.css";
import Bookshelf from "./Bookshelf";
import Search from "./Search";
import { Route } from "react-router-dom";

import * as BooksApi from "./BooksAPI";

class App extends Component {
  state = {
    booksOnShelf: []
  };

  componentDidMount() {
    BooksApi.getAll().then(books => {
      this.setState(() => ({
        booksOnShelf: books
      }));
    });
  }

  moveBook = (book, newShelfName) => {
    BooksApi.update(book, newShelfName).then();
  };

  render() {
    return (
      <div className="body">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books-content">
              <Bookshelf
                className="bookshelf"
                books={this.state.booksOnShelf}
                handleChange={this.moveBook}
              />
            </div>
          )}
        />

        <Route
          exact
          path="/search"
          render={() => (
            <Search
              books={this.state.booksOnShelf}
              handleChange={this.moveBook}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
