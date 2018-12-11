import React from 'react'
import MoveBook from './MoveBook';

function Book(props) {
    return (
      <li key={props.id}>
        <div className='book'>
          <div className='book-top'>
            <div className='book-cover'></div>
            <MoveBook />
          </div>
          <div className='book-title'>{props.title}</div>
          <div className='book-authors'>
            {props.authors.map((author) => (
              <div>{author}</div>
            ))}
          </div>
        </div>
      </li>
    )
}

export default Book