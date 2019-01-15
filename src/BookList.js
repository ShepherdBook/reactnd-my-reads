import React from "react";
import Book from "./Book";

const BookList = (props) => {
  return (
    <div>
      <header className="bookshelf-title">
        <h2>{props.title}</h2>
      </header>
      <ul className="books-grid">
        {props.books.length > 0 &&
          props.books.map(book => (
            <li key={book.id}>
              <Book book={book} handleChange={props.handleChange} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookList;
