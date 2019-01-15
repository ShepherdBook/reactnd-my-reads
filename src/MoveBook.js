import React, { Component } from "react";

class MoveBook extends Component {
  constructor(props) {
    super(props);
    this.state = { book: this.props.book };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.handleChange(this.state.book, event.target.value);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <form>
          <select value={this.state.book.shelf || 'none'} onChange={this.handleChange}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </form>
      </div>
    );
  }
}

export default MoveBook;
