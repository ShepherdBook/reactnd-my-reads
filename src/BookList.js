import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
  render() {
    return (
      <div>
        <header className="bookshelf-title">
          <h2>{this.props.title}</h2>
        </header>
        <ul className='books-grid'>
          {this.props.books.map((book) => (
            <li key={book.id}>
              <Book 
                title={book.title} 
                authors={book.authors}
                coverUrl={book.imageLinks.smallThumbnail}
                shelf={book.shelf}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BookList