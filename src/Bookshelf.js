import React, { Component } from 'react'
import Shelf from './Shelf'

class Bookshelf extends Component {

  render() {

    const currentlyReadingBooks = this.props.books.filter(book => book.shelf === 'currentlyReading')
    const wantToReadBooks = this.props.books.filter(book => book.shelf === 'wantToRead')
    const readBooks = this.props.books.filter(book => book.shelf === 'toRead')

    return (
      <div>
        <Shelf title={"Currently Reading"} books={currentlyReadingBooks} />
        <Shelf title={"Want to Read"} books={wantToReadBooks} />
        <Shelf title={"Read"} books={readBooks} />
      </div>
    )
  }
}

export default Bookshelf