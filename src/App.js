import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    books: [
      {
        "title": "The Linux Command Line",
        "authors": [
          "William E. Shotts, Jr."
        ], "id": "nggnmAEACAAJ",
        "shelf": "currentlyReading",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
      },
      {
        "title": "Learning Web Development with React and Bootstrap",
        "authors": [
          "Harmeet Singh",
          "Mehul Bhatt"
        ], "id": "sJf1vQAACAAJ",
        "shelf": "currentlyReading",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
      },
      {
        "title": "The Cuckoo's Calling",
        "authors": [
          "Robert Galbraith"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "id": "evuwdDLfAyYC",
        "shelf": "wantToRead"
      }
    ]
  }

  render() {
    return (
      <div className="body">
        <header className="list-books-title">
          <h1>my-reads</h1>
        </header>
      </div>
    );
  }
}

export default App;
