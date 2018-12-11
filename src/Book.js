import React, { Component } from 'react'
import MoveBook from './MoveBook';

class Book extends Component {
  render() {
    return (
      <li className='book' key={this.props.id}>
        {/* <img className='book-cover' alt='book cover'/> */}
        <p className='book-title'>{this.props.title}</p>
        <div className='book-authors'>
          {this.props.authors.map((author) => (
            <p>{author}</p>
          ))}
        </div>
        <MoveBook />
      </li>
    )
  }
}

export default Book