import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <form>
          <input />
        </form>
        <Link to="/" className="close-search" />
      </div>
    );
  }
}

export default Search;
