import React, { Component } from "react";

class MoveBook extends Component {
  render() {
    const { book, handleChange } = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={handleChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default MoveBook;
