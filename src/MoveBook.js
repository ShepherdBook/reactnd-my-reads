import React, { Component } from "react";

class MoveBook extends Component {
  render() {

    const { book } = this.props

    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading" selected={book.shelf === 'currentlyReading'}>Currently Reading</option>
          <option value="wantToRead" selected={book.shelf === 'wantToRead'}>Want to Read</option>
          <option value="read" selected={book.shelf === 'read'}>Read</option>
          <option value="none" selected={book.shelf === 'none'}>None</option>
        </select>
      </div>
    );
  }
}

export default MoveBook;
