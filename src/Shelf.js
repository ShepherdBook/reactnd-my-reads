import React, { Component } from 'react'
import BookList from './BookList';

class Shelf extends Component {
  render() {
    return (
      <div>
        <header className="bookshelf-title">
          <h2>{this.props.title}</h2>
        </header>
        <BookList books={this.props.books}/>
      </div>
    )
  }
}

export default Shelf