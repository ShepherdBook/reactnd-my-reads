import React, { Component } from "react";
import "./App.css";
import Bookshelf from "./Bookshelf";
import Search from "./Search";
import { Route } from "react-router-dom";

import * as BooksApi from './BooksAPI'

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksApi.getAll().then(books => {
      this.setState(() => ({books}))
    })
  }

  moveBook = (book, newShelfName) => {
    BooksApi.update(book, newShelfName)
      .then()
  }

  render() {
    return (
      <div className="body">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books-content">
              <Bookshelf className="bookshelf" books={this.state.books} handleChange={this.moveBook} />
            </div>
          )}
        />

        <Route
          exact
          path="/search"
          component={Search}
        />
      </div>
    );
  }
}

export default App;
