import React, { Component } from 'react'
import MoveBook from './MoveBook';

class Book extends Component {
  render() {
    return (
      <div className='book'>
        <div className='book-top'>
          <div 
            className='book-cover'
            style={{
              width: 128, 
              height: 193,
              backgroundImage: `url(${this.props.coverUrl})`
            }}>
          </div>
          <MoveBook shelf={this.props.shelf}/>
        </div>
        <div className='book-title'>{this.props.title}</div>
        <div className='book-authors'>
          {this.props.authors.map((author) => (
            <div key={author}>{author}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default Book