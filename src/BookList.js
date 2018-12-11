import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
  render() {
    return (
      <ul className='books-grid'>
        {this.props.books.map((book) => (
          <Book 
            id={book.id}
            title={book.title} 
            authors={book.authors}
          />
        ))}
      </ul>
    )
  }
}

export default BookList