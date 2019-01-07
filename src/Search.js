import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import * as BooksApi from "./BooksAPI";

class Search extends Component {
  state = {
    results: []
  };

  updateQuery = query => {
    BooksApi.search(query).then(results => {
      this.setState(() => ({
        results: typeof results !== "undefined" ? results : []
      }));
    });
  };

  render() {
    const { handleChange } = this.props;

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
            books={this.state.results}
            handleChange={handleChange}
          />
          <Link to="/" className="close-search" />
        </div>
      </div>
    );
  }
}

export default Search;
