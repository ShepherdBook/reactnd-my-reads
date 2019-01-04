import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";

class Search extends Component {

  state = {
    query: ''
  }

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  render() {
    const { books } = this.props;
    const { query } = this.state

    const booksToShow = 
      query === ''
        ? books
        : books.filter(book =>
            book.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

    return (
      <div>
        <div className="search-books-bar">
          <form className="search-books-input-wrapper">
            <input 
              name="query" 
              placeholder="Search" 
              type='text' 
              value={query}
              onChange={event=> this.updateQuery(event.target.value)}/>
          </form>
        </div>
        <div className="search-books-results">
          <BookList title="Results" books={booksToShow} />
          <Link to="/" className="close-search" />
        </div>
      </div>
    );
  }
}

export default Search;
